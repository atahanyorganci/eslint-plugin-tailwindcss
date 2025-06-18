import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`no-arbitrary-value`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-arbitrary-value": "error",
			},
		});
	});

	it("should not report errors for standard Tailwind classes", async () => {
		const code = `
			<div className="bg-red-500 text-white p-4 m-2 rounded-lg shadow-md">
				<span className="font-bold text-xl">Hello World</span>
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(0);
	});

	it("should report error for arbitrary color values", async () => {
		const code = `<div className="bg-[#ff0000] text-[rgb(255,0,0)]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
		expect(results[0].messages[0].message).toContain("bg-[#ff0000]");
		expect(results[0].messages[1].message).toContain("text-[rgb(255,0,0)]");
	});

	it("should report error for arbitrary spacing values", async () => {
		const code = `<div className="p-[20px] m-[1.5rem] gap-[10vh]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should report error for arbitrary size values", async () => {
		const code = `<div className="w-[500px] h-[50vh] text-[18px]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should report error for arbitrary CSS property values", async () => {
		const code = `<div className="[background-color:red] [font-family:Arial]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle mixed standard and arbitrary classes", async () => {
		const code = `<div className="bg-blue-500 p-[15px] text-white m-[2rem]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
		expect(results[0].messages[0].message).toContain("p-[15px]");
		expect(results[0].messages[1].message).toContain("m-[2rem]");
	});

	it.fails("should handle template literals with arbitrary values", async () => {
		const code = `
			const dynamicClass = \`bg-red-500 p-[\${spacing}px] text-[#ffffff]\`;
			<div className={dynamicClass}>Content</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages.length).toBeGreaterThan(0);
	});

	it("should handle clsx/classnames with arbitrary values", async () => {
		const code = `
			import clsx from 'clsx';
			<div className={clsx('bg-blue-500', 'p-[20px]', { 'text-[red]': true })}>
				Content
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages.length).toBeGreaterThan(0);
	});

	it("should handle arbitrary values with complex CSS functions", async () => {
		const code = `
			<div className="bg-[linear-gradient(45deg,red,blue)] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
				Content
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle arbitrary values with CSS variables", async () => {
		const code = `<div className="bg-[var(--primary-color)] text-[var(--text-size)]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle arbitrary values with calc() functions", async () => {
		const code = `<div className="w-[calc(100%-20px)] h-[calc(50vh+10px)]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle nested brackets in arbitrary values", async () => {
		const code = `<div className="bg-[url('data:image/svg+xml;base64,PHN2Zw==')]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(1);
	});

	it("should handle arbitrary values with modifiers", async () => {
		const code = `<div className="hover:bg-[#ff0000] focus:text-[blue] md:p-[25px]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should handle arbitrary values with important modifier", async () => {
		const code = `<div className="!bg-[red] !text-[18px]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle arbitrary values in different JSX attributes", async () => {
		const code = `
			<div className="bg-[red]" data-class="p-[10px]">
				<input className="border-[2px]" />
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle multiline className with arbitrary values", async () => {
		const code = `
			<div className="
				bg-blue-500
				p-[20px]
				text-white
				m-[1rem]
				rounded-lg
			">
				Content
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle arbitrary values with special characters", async () => {
		const code = `<div className="content-['Hello_World'] before:content-['→']">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should handle arbitrary values with escaped characters", async () => {
		const code = `<div className="content-['\\A'] bg-[\\#ff0000]">Content</div>`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(2);
	});

	it("should not report false positives for bracket-like syntax", async () => {
		const code = `
			<div className="grid-cols-[1fr_2fr] auto-rows-[minmax(0,1fr)]">
				<span className="col-span-[2]">Content</span>
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(results[0].messages).toHaveLength(3);
	});

	it("should handle Vue.js template syntax", async () => {
		const code = `
			<template>
				<div :class="'bg-red-500 p-[20px] text-[white]'">Content</div>
			</template>
		`;
		const results = await eslint.lintText(code, { filePath: "test.vue" });
		expect(results[0].messages.length).toBeGreaterThan(0);
	});

	it("should handle Svelte class directive", async () => {
		const code = `
			<div class="bg-blue-500 p-[15px]" class:active="text-[red]">
				Content
			</div>
		`;
		const results = await eslint.lintText(code, { filePath: "test.svelte" });
		expect(results[0].messages.length).toBeGreaterThan(0);
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
});
