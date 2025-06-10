import path from "node:path";
import { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";

describe("`no-duplicate-classnames`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = new ESLint({
			overrideConfigFile: path.resolve(import.meta.dirname, "eslint.config.ts"),
			baseConfig: {
				rules: {
					"tailwindcss/no-duplicate-classnames": "error",
				},
			},
		});
	});

	it("should report error when a class is duplicated", async () => {
		const result = await eslint.lintText(`<div class="block block">Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});
});
