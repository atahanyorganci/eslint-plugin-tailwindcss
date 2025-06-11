import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`no-contradicting-classnames`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-contradicting-classnames": "error",
			},
		});
	});

	it("should not report errors for non-conflicting classes", async () => {
		const code = `
			<div className="bg-red-500 text-white p-4 m-2 rounded-lg shadow-md">
				<span className="font-bold text-xl border-2 flex items-center">Hello</span>
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should report error for conflicting width classes", async () => {
		const code = `<div className="w-3 w-5">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
		expect(results[0].messages[0].message).toContain("'w-5' and 'w-3'");
	});

	it("should report error for conflicting height classes", async () => {
		const code = `<div className="h-10 h-20 h-full">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting margin classes", async () => {
		const code = `<div className="m-2 m-4 mx-6">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting padding classes", async () => {
		const code = `<div className="p-1 p-3 py-2">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting background classes", async () => {
		const code = `<div className="bg-red-500 bg-blue-300 bg-transparent">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting text color classes", async () => {
		const code = `<div className="text-red-500 text-blue-300">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
	});

	it("should report error for conflicting font size classes", async () => {
		const code = `<div className="text-sm text-lg text-xl">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it.fails("should report error for conflicting border classes", async () => {
		const code = `<div className="border-2 border-4 border-none">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting display classes", async () => {
		const code = `<div className="block inline flex grid">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should report error for conflicting position classes", async () => {
		const code = `<div className="static relative absolute fixed">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should report error for conflicting flex direction classes", async () => {
		const code = `<div className="flex-row flex-col flex-row-reverse">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting justify content classes", async () => {
		const code = `<div className="justify-start justify-center justify-end">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should report error for conflicting align items classes", async () => {
		const code = `<div className="items-start items-center items-end">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting classes with modifiers", async () => {
		const code = `<div className="w-4 hover:w-6 md:w-8 w-10">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
		expect(results[0].messages[0].message).toContain("'w-10' and 'w-4'");
	});

	it("should not report conflicts between different responsive breakpoints", async () => {
		const code = `<div className="w-4 md:w-6 lg:w-8 xl:w-10">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should not report conflicts between different pseudo-states", async () => {
		const code = `<div className="w-4 hover:w-6 focus:w-8 active:w-10">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle conflicting classes with important modifier", async () => {
		const code = `<div className="!w-4 !w-6">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
	});

	it("should handle mixed conflicting and non-conflicting classes", async () => {
		const code = `<div className="bg-red-500 w-4 text-white w-6 p-2">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
		expect(results[0].messages[0].message).toContain("'w-6' and 'w-4'");
	});

	it("should handle conflicting classes with extra whitespace", async () => {
		const code = `<div className="  w-4   w-6  ">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
	});

	it("should handle multiline className with conflicts", async () => {
		const code = `
			<div className="
				bg-red-500
				w-4
				text-white
				w-6
				p-2
			">
				Content
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
	});

	it("should report multiple conflicts in same className", async () => {
		const code = `<div className="w-4 w-6 h-8 h-10 bg-red bg-blue">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should handle conflicting opacity classes", async () => {
		const code = `<div className="opacity-50 opacity-75 opacity-100">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting z-index classes", async () => {
		const code = `<div className="z-10 z-20 z-auto">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting overflow classes", async () => {
		const code = `<div className="overflow-hidden overflow-auto overflow-scroll">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting cursor classes", async () => {
		const code = `<div className="cursor-pointer cursor-not-allowed cursor-default">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should not report conflicts for different class categories", async () => {
		const code = `<div className="w-4 h-4 bg-red-500 text-white border-2">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle empty className", async () => {
		const code = `<div className="">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle className with only whitespace", async () => {
		const code = `<div className="   ">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle single class", async () => {
		const code = `<div className="w-4">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle conflicting font weight classes", async () => {
		const code = `<div className="font-normal font-bold font-light">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting text alignment classes", async () => {
		const code = `<div className="text-left text-center text-right">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting rounded corner classes", async () => {
		const code = `<div className="rounded-none rounded-sm rounded-lg">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle conflicting shadow classes", async () => {
		const code = `<div className="shadow-sm shadow-lg shadow-none">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should not check non-className attributes", async () => {
		const code = `<div data-class="w-4 w-6" id="w-4 w-6">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should handle class attribute in HTML", async () => {
		const code = `<div class="w-4 w-6">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.html" });
		expect(results[0].messages).toHaveLength(1);
	});
});
