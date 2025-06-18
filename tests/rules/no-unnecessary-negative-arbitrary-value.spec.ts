import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`no-unnecessary-negative-arbitrary-value`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-unnecessary-negative-arbitrary-value": "error",
			},
		});
	});

	it("should report negative arbitrary values for margin utilities", async () => {
		const code = `<div className="m-[-10px] mx-[-1rem] my-[-50%]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(3);
		expect(result.messages[0].message).toContain("m-[-10px]");
		expect(result.messages[0].message).toContain("-m-[10px]");
		expect(result.messages[0].fix?.text).toEqual(`"-m-[10px] mx-[-1rem] my-[-50%]"`);
		expect(result.messages[1].message).toContain("mx-[-1rem]");
		expect(result.messages[1].message).toContain("-mx-[1rem]");
		expect(result.messages[1].fix?.text).toEqual(`"m-[-10px] -mx-[1rem] my-[-50%]"`);
		expect(result.messages[2].message).toContain("my-[-50%]");
		expect(result.messages[2].message).toContain("-my-[50%]");
		expect(result.messages[2].fix?.text).toEqual(`"m-[-10px] mx-[-1rem] -my-[50%]"`);
	});

	it("should report negative arbitrary values for padding utilities", async () => {
		const code = `<div className="p-[-8px] pt-[-2rem] pb-[-1em]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(3);
		expect(result.messages[0].message).toContain("p-[-8px]");
		expect(result.messages[0].message).toContain("-p-[8px]");
	});

	it("should report negative arbitrary values for positioning utilities", async () => {
		const code = `<div className="top-[-20px] left-[-1rem] inset-[-5px]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(3);
		expect(result.messages[0].message).toContain("top-[-20px]");
		expect(result.messages[0].message).toContain("-top-[20px]");
	});

	it("should report negative arbitrary values for transform utilities", async () => {
		const code = `<div className="translate-x-[-50px] rotate-[-45deg] scale-[-1.5]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(3);
		expect(result.messages[0].message).toContain("translate-x-[-50px]");
		expect(result.messages[0].message).toContain("-translate-x-[50px]");
	});

	it("should preserve modifiers when reporting", async () => {
		const code = `<div className="hover:m-[-10px] dark:hover:p-[-5px]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("hover:m-[-10px]");
		expect(result.messages[0].message).toContain("hover:-m-[10px]");
		expect(result.messages[1].message).toContain("dark:hover:p-[-5px]");
		expect(result.messages[1].message).toContain("dark:hover:-p-[5px]");
	});

	it("should not report positive arbitrary values", async () => {
		const code = `<div className="m-[10px] p-[1rem] top-[50%]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(0);
	});

	it("should not report non-length arbitrary values", async () => {
		const code = `<div className="m-[-var(--spacing)] p-[-calc(100% - 10px)] bg-[-webkit-gradient()]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(0);
	});

	it("should not report utilities that don't support negative modifiers", async () => {
		const code = `<div className="bg-[-red] text-[-16px] border-[-2px]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(0);
	});

	it("should not report non-arbitrary classes", async () => {
		const code = `<div className="m-4 -m-4 p-2 -p-2" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(0);
	});

	it("should handle multiple classes in single attribute", async () => {
		const code = `<div className="flex m-[-10px] justify-center p-[-5px] items-center" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("m-[-10px]");
		expect(result.messages[1].message).toContain("p-[-5px]");
	});

	it("should work with different CSS units", async () => {
		const code = `<div className="m-[-10px] p-[-1rem] top-[-50%] left-[-2em] right-[-100vh]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(5);
		expect(result.messages[0].message).toContain("-m-[10px]");
		expect(result.messages[1].message).toContain("-p-[1rem]");
		expect(result.messages[2].message).toContain("-top-[50%]");
		expect(result.messages[3].message).toContain("-left-[2em]");
		expect(result.messages[4].message).toContain("-right-[100vh]");
	});

	it("should handle decimal values", async () => {
		const code = `<div className="m-[-10.5px] p-[-1.25rem]" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("-m-[10.5px]");
		expect(result.messages[1].message).toContain("-p-[1.25rem]");
	});

	it("should preserve leading and trailing whitespace", async () => {
		const code = `<div className=" bg-red-500  m-[-10px]   p-[-5px]   ">Content</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].message).toContain("m-[-10px]");
		expect(result.messages[0].message).toContain("-m-[10px]");
		expect(result.messages[0].fix?.text).toEqual(`" bg-red-500  -m-[10px]   p-[-5px]   "`);
		expect(result.messages[1].message).toContain("p-[-5px]");
		expect(result.messages[1].message).toContain("-p-[5px]");
		expect(result.messages[1].fix?.text).toEqual(`" bg-red-500  m-[-10px]   -p-[5px]   "`);
	});
});
