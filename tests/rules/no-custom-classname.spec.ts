import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint, loadEslintWithPrefix } from "../fixtures/eslint.js";

describe("`no-custom-classname`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-custom-classname": "error",
			},
		});
	});

	it("should not report valid Tailwind classes", async () => {
		const code = `
			<div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should report custom classnames", async () => {
		const code = `
			<div className="custom-class another-custom" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].messageId).toBe("customClassname");
		expect(result.messages[0].message).toContain("custom-class");
		expect(result.messages[1].messageId).toBe("customClassname");
		expect(result.messages[1].message).toContain("another-custom");
	});

	it("should handle mixed valid and invalid classnames", async () => {
		const code = `
			<div className="flex custom-class bg-red-500 invalid-utility" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("custom-class");
		expect(result.messages[1].message).toContain("invalid-utility");
	});

	it("should handle arbitrary values correctly", async () => {
		const code = `
			<div className="bg-[#ff0000] text-[14px] w-[calc(100%-20px)]" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should handle modifiers and variants", async () => {
		const code = `
			<div className="hover:bg-blue-500 md:text-lg dark:text-white focus:outline-none" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should handle complex modifiers with custom classes", async () => {
		const code = `
			<div className="hover:custom-class md:invalid-utility dark:bg-blue-500" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("custom-class");
		expect(result.messages[1].message).toContain("invalid-utility");
	});

	it("should ignore non-class attributes", async () => {
		const code = `
			<div id="custom-id" data-testid="custom-test" aria-label="custom-label" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should handle empty className", async () => {
		const code = `
			<div className="" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should handle className with only whitespace", async () => {
		const code = `
			<div className="   " />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should handle multiple whitespace between classes", async () => {
		const code = `
			<div className="flex    bg-blue-500     custom-class    text-white" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle newlines and tabs in className", async () => {
		const code = `
			<div className="flex
				bg-blue-500
				custom-class
				text-white" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle TSX expressions in className", async () => {
		const code = `
			<div className={\`flex \${isActive ? 'bg-blue-500' : 'bg-gray-500'}\`} />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should report error for expressions in template literals", async () => {
		const code = `
			<div className={\`flex \${isActive ? 'custom-bg' : 'bg-gray-500'}\`} />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-bg");
	});

	it("should handle conditional className with custom classes", async () => {
		const code = `
			<div className="flex bg-blue-500 custom-class" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should work with class attribute (HTML)", async () => {
		const code = `
			<div class="flex custom-class bg-blue-500" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle namespaced TSX attributes", async () => {
		const code = `
			<div className="flex custom-class" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
	});

	it("should handle negative values", async () => {
		const code = `
			<div className="-mt-4 -ml-2 custom-negative" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-negative");
	});

	it("should handle important modifier", async () => {
		const code = `
			<div className="bg-blue-500! custom-important!" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-important");
	});

	it("should handle peer and group modifiers", async () => {
		const code = `
			<div className="peer-checked:bg-blue-500 group-hover:text-white peer-invalid:custom-class" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle arbitrary selectors", async () => {
		const code = `
			<div className="[&>li]:bg-blue-500 [&_p]:text-white [&>span]:custom-class" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle data attributes and aria modifiers", async () => {
		const code = `
			<div className="data-[state=open]:bg-blue-500 aria-[expanded=true]:text-white data-[invalid]:custom-class" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("custom-class");
	});

	it("should handle single character classes", async () => {
		const code = `
			<div className="p-4 m-2 x y z" />
		`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(3);
		expect(result.messages[0].message).toContain("x");
		expect(result.messages[1].message).toContain("y");
		expect(result.messages[2].message).toContain("z");
	});

	it("should handle custom prefix", async () => {
		const eslintWithPrefix = loadEslintWithPrefix({
			rules: {
				"tailwindcss/no-custom-classname": "error",
			},
		});
		const code = `
			<div className="custom-class tw:custom-class tw:px-4" />
		`;
		const [result] = await eslintWithPrefix.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("custom-class");
		expect(result.messages[1].message).toContain("tw:custom-class");
	});

	it("should handle extra prefix", async () => {
		const code = `tw:px-4`;
		const eslint = loadEslintWithPrefix({
			rules: {
				"tailwindcss/no-custom-classname": "error",
			},
		});
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});
});
