import type { Jiti } from "jiti";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { createJiti } from "jiti";
import postcss from "postcss";
// @ts-expect-error: `postcss-import` doesn't have TypeScript types
import postcssImport from "postcss-import";
import { resolveCssFrom, resolveJsFrom } from "./resolve.js";

export interface ClassMetadata {
	modifiers: string[];
}

export interface ClassItem {
	name: string;
	utility: string;
	fraction: boolean;
	modifiers: string[];
}

export type ClassEntry = [string, ClassMetadata];

export interface SelectorOptions {
	modifier?: string;
	value?: string;
}

export interface VariantEntry {
	name: string;
	isArbitrary: boolean;
	values: string[];
	hasDash: boolean;
	selectors: (options: SelectorOptions) => string[];
}

/**
 * Subset of `DesignSystem` object from `tailwindcss` package.
 *
 * @see {@link https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/design-system.ts#L21 | original source}
 */
export interface DesignSystem {
	/**
	 * Whether to mark utility declarations as `!important`
	 */
	important: boolean;
	getClassOrder: (classes: string[]) => [string, bigint | null][];
	getClassList: () => ClassEntry[];
	getVariants: () => VariantEntry[];
}

export interface TailwindConfigParams {
	stylesheet: string;
	packageName?: string;
}

export async function getTailwindConfig({ stylesheet, packageName }: TailwindConfigParams): Promise<DesignSystem> {
	const baseDir = process.cwd();
	const entryPoint = path.resolve(baseDir, stylesheet);

	const result = await loadTailwindConfig(
		baseDir,
		packageName ?? "tailwindcss",
		entryPoint,
	);

	return result;
}

async function loadTailwindConfig(
	baseDir: string,
	pkgName: string,
	entryPoint: string | null,
) {
	const pkgFile = resolveJsFrom(baseDir, `${pkgName}/package.json`);
	const pkgDir = path.dirname(pkgFile);
	const v4 = await loadV4(baseDir, pkgDir, pkgName, entryPoint);
	return v4;
}

/**
 * Create a loader function that can load plugins and config files relative to
 * the CSS file that uses them. However, we don't want missing files to prevent
 * everything from working so we'll let the error handler decide how to proceed.
 */
function createLoader<T>({
	legacy,
	jiti,
	filepath,
	onError,
}: {
	legacy: boolean;
	jiti: Jiti;
	filepath: string;
	onError: (id: string, error: unknown, resourceType: string) => T;
}) {
	const cacheKey = `${+Date.now()}`;

	async function loadFile(id: string, base: string, resourceType: string) {
		try {
			const resolved = resolveJsFrom(base, id);

			const url = pathToFileURL(resolved);
			url.searchParams.append("t", cacheKey);

			return await jiti.import(url.href, { default: true });
		}
		catch (err) {
			return onError(id, err, resourceType);
		}
	}

	if (legacy) {
		const baseDir = path.dirname(filepath);
		return (id: string) => loadFile(id, baseDir, "module");
	}

	return async (id: string, base: string, resourceType: string) => {
		return {
			base,
			module: await loadFile(id, base, resourceType),
		};
	};
}

async function loadV4(
	baseDir: string,
	pkgDir: string,
	pkgName: string,
	entryPoint: string | null,
) {
	// Import Tailwind — if this is v4 it'll have APIs we can use directly
	const pkgPath = resolveJsFrom(baseDir, pkgName);
	const tw = await import(pathToFileURL(pkgPath).toString());

	// This is not Tailwind v4
	if (!tw.__unstable__loadDesignSystem) {
		throw new Error("Tailwind package isn't v4");
	}

	// If the user doesn't define an entrypoint then we use the default theme
	entryPoint = entryPoint ?? `${pkgDir}/theme.css`;

	// Create a Jiti instance that can be used to load plugins and config files
	const jiti = createJiti(import.meta.url, {
		moduleCache: false,
		fsCache: false,
	});

	const importBasePath = path.dirname(entryPoint);

	// Resolve imports in the entrypoint to a flat CSS tree
	let css = await fs.readFile(entryPoint, "utf-8");

	// Determine if the v4 API supports resolving `@import`
	let supportsImports = false;
	try {
		await tw.__unstable__loadDesignSystem("@import \"./empty\";", {
			loadStylesheet: () => {
				supportsImports = true;
				return {
					base: importBasePath,
					content: "",
				};
			},
		});
	}
	catch {}

	if (!supportsImports) {
		const resolveImports = postcss([postcssImport()]);
		const result = await resolveImports.process(css, { from: entryPoint });
		css = result.css;
	}

	// Load the design system and set up a compatible context object that is
	// usable by the rest of the plugin
	const design = await tw.__unstable__loadDesignSystem(css, {
		base: importBasePath,

		// v4.0.0-alpha.25+
		loadModule: createLoader({
			legacy: false,
			jiti,
			filepath: entryPoint,
			onError: (id, err, resourceType) => {
				console.error(`Unable to load ${resourceType}: ${id}`, err);

				if (resourceType === "config") {
					return {};
				}
				else if (resourceType === "plugin") {
					return () => {};
				}
			},
		}),

		loadStylesheet: async (id: string, base: string) => {
			const resolved = resolveCssFrom(base, id);

			return {
				base: path.dirname(resolved),
				content: await fs.readFile(resolved, "utf-8"),
			};
		},

		// v4.0.0-alpha.24 and below
		loadPlugin: createLoader({
			legacy: true,
			jiti,
			filepath: entryPoint,
			onError(id, err) {
				console.error(`Unable to load plugin: ${id}`, err);

				return () => {};
			},
		}),

		loadConfig: createLoader({
			legacy: true,
			jiti,
			filepath: entryPoint,
			onError(id, err) {
				console.error(`Unable to load config: ${id}`, err);

				return {};
			},
		}),
	});

	return design;
}
