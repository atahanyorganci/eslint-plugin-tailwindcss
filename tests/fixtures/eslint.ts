import type { Linter } from "eslint";
import path from "node:path";
import { ESLint } from "eslint";

export function loadEslint(config: Linter.Config = {}): ESLint {
	return new ESLint({
		overrideConfigFile: path.resolve(import.meta.dirname, "base/eslint.config.ts"),
		overrideConfig: config,
	});
}

export function loadEslintWithPrefix(config: Linter.Config = {}): ESLint {
	return new ESLint({
		overrideConfigFile: path.resolve(import.meta.dirname, "prefix/eslint.config.ts"),
		overrideConfig: config,
	});
}
