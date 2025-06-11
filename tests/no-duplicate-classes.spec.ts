import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "./fixtures/eslint.js";

describe("`no-duplicate-classnames`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-duplicate-classnames": "error",
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
