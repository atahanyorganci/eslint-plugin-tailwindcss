import { describe, beforeAll, it, expect } from "vitest";
import { ESLint } from "eslint";
import path from "node:path";

describe("`no-duplicate-classes`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = new ESLint({
			overrideConfigFile: path.resolve(import.meta.dirname, "eslint.config.ts")
		});
	});

	it("should report error when a class is duplicated", async () => {
		const result = await eslint.lintText(`<div class="block block">Simple, basic</div>`, {
			filePath: "test.tsx"
		})
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1)
	});
});
