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
		expect(result.messages[0].fix?.text).toBe(`"w-1/2"`);
	});

	it("should report error for replacing 50% with fraction in JSXExpressionContainer", async () => {
		const [result] = await eslint.lintText("<div className={clsx(`w-[50%]`)}>Content</div>", {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("w-[50%]");
		expect(result.messages[0].message).toContain("w-1/2");
		expect(result.messages[0].fix?.text).toBe("w-1/2");
	});

	it("should preserve irregular whitespace", async () => {
		const [result] = await eslint.lintText(`<div class=" bg-red-500  w-[50%]   ">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("w-[50%]");
		expect(result.messages[0].message).toContain("w-1/2");
		expect(result.messages[0].fix?.text).toEqual(`" bg-red-500  w-1/2   "`);
	});

	it("should preserve leading and trailing whitespace", async () => {
		const [result] = await eslint.lintText(`<div class=" bg-red-500  w-[50%]   h-20  ">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("w-[50%]");
		expect(result.messages[0].message).toContain("w-1/2");
		expect(result.messages[0].fix?.text).toEqual(`" bg-red-500  w-1/2   h-20  "`);
	});
});
