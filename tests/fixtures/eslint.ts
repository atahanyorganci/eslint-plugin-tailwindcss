import type { Linter } from "eslint";
import path from "node:path";
import { ESLint } from "eslint";

export function loadEslint(baseConfig: Linter.Config = {}): ESLint {
	return new ESLint({
		overrideConfigFile: path.resolve(import.meta.dirname, "eslint.config.ts"),
		baseConfig,
	});
}
