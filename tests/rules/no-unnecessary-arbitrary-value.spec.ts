import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`no-unnecessary-arbitrary-value`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-unnecessary-arbitrary-value": "error",
			},
		});
	});

	it("should report error for replacing 50% with fraction", async () => {
		const [result] = await eslint.lintText(`<div class="w-[50%]">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("w-[50%]");
		expect(result.messages[0].message).toContain("w-1/2");
	});
});
