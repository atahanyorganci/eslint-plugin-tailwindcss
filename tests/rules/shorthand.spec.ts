import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`shorthand`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/shorthand": "error",
			},
		});
	});

	describe("size shorthand (w + h)", () => {
		it("should suggest size shorthand for matching width and height", async () => {
			const code = `<div className="w-10 h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("w-10");
			expect(result.messages[0].message).toContain("h-10");
			expect(result.messages[0].message).toContain("size-10");
		});

		it("should suggest size shorthand for arbitrary values", async () => {
			const code = `<div className="w-[100px] h-[100px]" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("w-[100px]");
			expect(result.messages[0].message).toContain("h-[100px]");
			expect(result.messages[0].message).toContain("size-[100px]");
		});

		it("should not suggest size shorthand for different values", async () => {
			const code = `<div className="w-10 h-20" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});

		it("should work with classes in any order", async () => {
			const code = `<div className="flex h-10 justify-center w-10 items-center" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("h-10");
			expect(result.messages[0].message).toContain("w-10");
			expect(result.messages[0].message).toContain("size-10");
		});
	});

	describe("padding shorthand (px + py)", () => {
		it("should suggest padding shorthand for matching px and py", async () => {
			const code = `<div className="px-4 py-4" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("px-4");
			expect(result.messages[0].message).toContain("py-4");
			expect(result.messages[0].message).toContain("p-4");
		});

		it("should suggest padding shorthand for arbitrary values", async () => {
			const code = `<div className="px-[1rem] py-[1rem]" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("px-[1rem]");
			expect(result.messages[0].message).toContain("py-[1rem]");
			expect(result.messages[0].message).toContain("p-[1rem]");
		});

		it("should not suggest padding shorthand for different values", async () => {
			const code = `<div className="px-4 py-8" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});
	});

	describe("margin shorthand (mx + my)", () => {
		it("should suggest margin shorthand for matching mx and my", async () => {
			const code = `<div className="mx-auto my-auto" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("mx-auto");
			expect(result.messages[0].message).toContain("my-auto");
			expect(result.messages[0].message).toContain("m-auto");
		});

		it("should suggest margin shorthand for arbitrary values", async () => {
			const code = `<div className="mx-[2rem] my-[2rem]" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("mx-[2rem]");
			expect(result.messages[0].message).toContain("my-[2rem]");
			expect(result.messages[0].message).toContain("m-[2rem]");
		});

		it("should not suggest margin shorthand for different values", async () => {
			const code = `<div className="mx-4 my-8" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});
	});

	describe("modifiers", () => {
		it("should suggest shorthand for classes with same modifiers", async () => {
			const code = `<div className="hover:w-10 hover:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("hover:w-10");
			expect(result.messages[0].message).toContain("hover:h-10");
			expect(result.messages[0].message).toContain("hover:size-10");
		});

		it("should suggest shorthand for classes with multiple same modifiers", async () => {
			const code = `<div className="dark:hover:w-10 dark:hover:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("dark:hover:w-10");
			expect(result.messages[0].message).toContain("dark:hover:h-10");
			expect(result.messages[0].message).toContain("dark:hover:size-10");
		});

		it("should not suggest shorthand for classes with different modifiers", async () => {
			const code = `<div className="w-10 hover:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});

		it("should not suggest shorthand for partially matching modifiers", async () => {
			const code = `<div className="hover:w-10 dark:hover:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});
	});

	describe("responsive variants", () => {
		it("should suggest shorthand for matching responsive variants", async () => {
			const code = `<div className="md:w-10 md:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("md:w-10");
			expect(result.messages[0].message).toContain("md:h-10");
			expect(result.messages[0].message).toContain("md:size-10");
		});

		it("should handle multiple responsive variants separately", async () => {
			const code = `<div className="w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(3);

			// First message - base classes
			expect(result.messages[0].message).toContain("w-10");
			expect(result.messages[0].message).toContain("h-10");
			expect(result.messages[0].message).toContain("size-10");

			// Second message - md classes
			expect(result.messages[1].message).toContain("md:w-20");
			expect(result.messages[1].message).toContain("md:h-20");
			expect(result.messages[1].message).toContain("md:size-20");

			// Third message - lg classes
			expect(result.messages[2].message).toContain("lg:w-32");
			expect(result.messages[2].message).toContain("lg:h-32");
			expect(result.messages[2].message).toContain("lg:size-32");
		});

		it("should not mix different responsive variants", async () => {
			const code = `<div className="w-10 md:h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});
	});

	describe("multiple shorthand opportunities", () => {
		it("should detect multiple different shorthand opportunities", async () => {
			const code = `<div className="w-10 h-10 px-4 py-4 mx-2 my-2" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(3);

			// Find each message type
			const sizeMessage = result.messages.find(m => m.message.includes("size-10"));
			const paddingMessage = result.messages.find(m => m.message.includes("p-4"));
			const marginMessage = result.messages.find(m => m.message.includes("m-2"));

			expect(sizeMessage).toBeDefined();
			expect(sizeMessage!.message).toContain("w-10");
			expect(sizeMessage!.message).toContain("h-10");

			expect(paddingMessage).toBeDefined();
			expect(paddingMessage!.message).toContain("px-4");
			expect(paddingMessage!.message).toContain("py-4");

			expect(marginMessage).toBeDefined();
			expect(marginMessage!.message).toContain("mx-2");
			expect(marginMessage!.message).toContain("my-2");
		});

		it("should handle mixed modifiers correctly", async () => {
			const code = `<div className="w-10 h-10 hover:px-4 hover:py-4" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(2);

			// Find each message type
			const sizeMessage = result.messages.find(m => m.message.includes("size-10"));
			const paddingMessage = result.messages.find(m => m.message.includes("hover:p-4"));

			expect(sizeMessage).toBeDefined();
			expect(sizeMessage!.message).toContain("w-10");
			expect(sizeMessage!.message).toContain("h-10");

			expect(paddingMessage).toBeDefined();
			expect(paddingMessage!.message).toContain("hover:px-4");
			expect(paddingMessage!.message).toContain("hover:py-4");
		});
	});

	describe("edge cases", () => {
		it("should handle classes with special characters in arbitrary values", async () => {
			const code = `<div className="w-[calc(100%-10px)] h-[calc(100%-10px)]" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("w-[calc(100%-10px)]");
			expect(result.messages[0].message).toContain("h-[calc(100%-10px)]");
			expect(result.messages[0].message).toContain("size-[calc(100%-10px)]");
		});

		it("should not suggest shorthand when only one property is present", async () => {
			const code = `<div className="w-10 px-4 mx-2" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(0);
		});

		it("should handle duplicate classes correctly", async () => {
			const code = `<div className="w-10 w-10 h-10" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("w-10");
			expect(result.messages[0].message).toContain("h-10");
			expect(result.messages[0].message).toContain("size-10");
		});
	});
});
