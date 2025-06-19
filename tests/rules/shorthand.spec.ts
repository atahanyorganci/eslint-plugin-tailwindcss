/* eslint-disable no-template-curly-in-string */
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
			expect(result.messages[0].fix?.text).toBe(`"size-10"`);
		});

		it("should suggest size shorthand for arbitrary values", async () => {
			const code = `<div className="w-[100px] h-[100px]" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });

			expect(result.messages).toHaveLength(1);
			expect(result.messages[0].message).toContain("w-[100px]");
			expect(result.messages[0].message).toContain("h-[100px]");
			expect(result.messages[0].message).toContain("size-[100px]");
			expect(result.messages[0].fix?.text).toBe(`"size-[100px]"`);
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
			expect(result.messages[0].fix?.text).toBe(`"flex size-10 justify-center items-center"`);
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

		it.fails("should not suggest shorthand where combined class is not a valid Tailwind class", async () => {
			const code = `<div className="w-screen h-screen bg-red-500" />`;
			const [result] = await eslint.lintText(code, { filePath: "test.jsx" });
			expect(result.messages).toHaveLength(0);
		});
	});
});

describe("`shorthand` (legacy conversions)", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/shorthand": "error",
			},
		});
	});

	it("should not report for overflow-x-auto overflow-y-scroll", async () => {
		const code = `
      <div class="overflow-x-auto overflow-y-scroll">
        No shorthand possible for overflow
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for overscroll-x-auto overscroll-y-none", async () => {
		const code = `
      <div class="overscroll-x-auto overscroll-y-none">
        No shorthand possible for overscroll
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for mt-0 mr-1 mb-3 ml-4", async () => {
		const code = `
      <div class="mt-0 mr-1 mb-3 ml-4">
        No shorthand possible for margin
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for top-[0] right-[50%] bottom-[10px] left-[var(--some-value)]", async () => {
		const code = `
      <div class="top-[0] right-[50%] bottom-[10px] left-[var(--some-value)]">
        No shorthand possible for inset
      </div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for top-[0] right-0 bottom-0 left-[0]", async () => {
		const code = `
      <div class="top-[0] right-0 bottom-0 left-[0]">
        Cannot merge mixed values (arbitrary + regular)
      </div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for grid gap-x-8 gap-y-4 grid-cols-3", async () => {
		const code = `
      <div class="grid gap-x-8 gap-y-4 grid-cols-3">
        No shorthand possible for gap
      </div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for scale-x-75 -scale-y-75", async () => {
		const code = `<img class="scale-x-75 -scale-y-75" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for px-16 pt-48 pb-16", async () => {
		const code = `<div class="px-16 pt-48 pb-16"></div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for py-2.5 md:py-3 pl-2.5 md:pl-4 font-medium uppercase", async () => {
		const code = `<div className="py-2.5 md:py-3 pl-2.5 md:pl-4 font-medium uppercase">issue #91</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for class attribute with no value", async () => {
		const code = `<div class>No errors while typing</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for px-0 py-[0] with skipClassAttribute", async () => {
		const code = `
      <div className={"px-0 py-[0]"}>skipClassAttribute</div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for group/name:rounded-r-full rounded-l-full", async () => {
		const code = `
      <div class="group/name:rounded-r-full rounded-l-full">
        support named group/peer syntax
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for overflow-hidden text-ellipsis hover:whitespace-nowrap", async () => {
		const code = `
      <div class="overflow-hidden text-ellipsis hover:whitespace-nowrap">
        Possible shorthand available for truncate, but some of the classes have modifiers
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for overflow-hidden text-ellipsis !whitespace-nowrap", async () => {
		const code = `
      <div class="overflow-hidden text-ellipsis !whitespace-nowrap">
        Possible shorthand available for truncate, but some of the classes have important
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for absolute inset-y-0 left-0 w-1/3 rounded-[inherit] shadow-lg", async () => {
		const code = "<div className={`absolute inset-y-0 left-0 w-1/3 rounded-[inherit] shadow-lg ${className}`}>issue #312</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it.fails("should not report for w-screen h-screen", async () => {
		const code = "<div className={'w-screen h-screen'}>issue #307</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it.fails("should report for overflow-x-auto overflow-y-auto", async () => {
		const code = `
      <div class="overflow-x-auto overflow-y-auto block md:p-0 px-0 py-[0]">
        Possible shorthand for overflow
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("overflow-x-auto");
		expect(result.messages[0].message).toContain("overflow-y-auto");
		expect(result.messages[0].message).toContain("overflow-auto");
	});

	it.fails("should report for overscroll-x-contain overscroll-y-contain", async () => {
		const code = `
      <div class="overscroll-x-contain overscroll-y-contain block md:p-0 px-0 py-[0]">
        Possible shorthand for overscroll
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("overscroll-x-contain");
		expect(result.messages[0].message).toContain("overscroll-y-contain");
		expect(result.messages[0].message).toContain("overscroll-contain");
	});

	it("should report for mt-0 mr-0 mb-0 ml-1", async () => {
		const code = `
      <div class="mt-0 mr-0 mb-0 ml-1">
        Possible shorthand for margin
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("mt-0");
		expect(result.messages[0].message).toContain("mb-0");
		expect(result.messages[0].message).toContain("my-0");
	});

	it("should report for -mt-1 -mr-1 -mb-1 ml-0", async () => {
		const code = `
      <div class="-mt-1 -mr-1 -mb-1 ml-0">
        Possible shorthand for negative margin
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("-mt-1");
		expect(result.messages[0].message).toContain("-mb-1");
		expect(result.messages[0].message).toContain("-my-1");
	});

	it("should report for mt-0 mr-0 mb-0 ml-1 md:mx-2 md:my-2 py-0 px-0 block", async () => {
		const code = `
      <div class="mt-0 mr-0 mb-0 ml-1 md:mx-2 md:my-2 py-0 px-0 block">
        Possible shorthand for margin
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(3);

		const myMessage = result.messages.find(m => m.message.includes("my-0"));
		const mdMessage = result.messages.find(m => m.message.includes("md:m-2"));
		const pMessage = result.messages.find(m => m.message.includes("p-0"));

		expect(myMessage).toBeDefined();
		expect(mdMessage).toBeDefined();
		expect(pMessage).toBeDefined();
	});

	it.fails("should report for rounded-tl-sm rounded-tr-sm rounded-br-lg rounded-bl-xl md:rounded-t-md md:rounded-b-md", async () => {
		const code = `
      <div class="rounded-tl-sm rounded-tr-sm rounded-br-lg rounded-bl-xl md:rounded-t-md md:rounded-b-md">
        Possible shorthand for border-radius
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);

		const roundedTMessage = result.messages.find(m => m.message.includes("rounded-t-sm"));
		const mdMessage = result.messages.find(m => m.message.includes("md:rounded-md"));

		expect(roundedTMessage).toBeDefined();
		expect(mdMessage).toBeDefined();
	});

	it.fails("should report for rounded-tl rounded-tr rounded-b", async () => {
		const code = `
      <div class="rounded-tl rounded-tr rounded-b">
        Possible shorthand for border-radius
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("rounded-tl");
		expect(result.messages[0].message).toContain("rounded-tr");
		expect(result.messages[0].message).toContain("rounded-b");
		expect(result.messages[0].message).toContain("rounded");
	});

	it.fails("should report for rounded-tl-sm rounded-tr-sm rounded-b-sm", async () => {
		const code = `
      <div class="rounded-tl-sm rounded-tr-sm rounded-b-sm">
        Possible shorthand for border-radius
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("rounded-tl-sm");
		expect(result.messages[0].message).toContain("rounded-tr-sm");
		expect(result.messages[0].message).toContain("rounded-b-sm");
		expect(result.messages[0].message).toContain("rounded-sm");
	});

	it.fails("should report for border-t-4 border-r-4 border-b-4 border-l-0", async () => {
		const code = `
      <div class="border-t-4 border-r-4 border-b-4 border-l-0">
        Possible shorthand for border-width
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("border-t-4");
		expect(result.messages[0].message).toContain("border-b-4");
		expect(result.messages[0].message).toContain("border-y-4");
	});

	it.fails("should report for top-[0] right-[var(--some-value)] bottom-[0] left-[var(--some-value)]", async () => {
		const code = `
      <div class="top-[0] right-[var(--some-value)] bottom-[0] left-[var(--some-value)]">
        No shorthand possible
      </div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);

		const insetYMessage = result.messages.find(m => m.message.includes("inset-y-[0]"));
		const insetXMessage = result.messages.find(m => m.message.includes("inset-x-[var(--some-value)]"));

		expect(insetYMessage).toBeDefined();
		expect(insetXMessage).toBeDefined();
	});

	it.fails("should report for grid gap-x-4 gap-y-4 grid-cols-3", async () => {
		const code = `
      <div class="grid gap-x-4 gap-y-4 grid-cols-3">
        Possible shorthand for gap
      </div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("gap-x-4");
		expect(result.messages[0].message).toContain("gap-y-4");
		expect(result.messages[0].message).toContain("gap-4");
	});

	it.fails("should report for scale-x-75 scale-y-75", async () => {
		const code = `<img class="scale-x-75 scale-y-75" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("scale-x-75");
		expect(result.messages[0].message).toContain("scale-y-75");
		expect(result.messages[0].message).toContain("scale-75");
	});

	it.fails("should report for -scale-x-50 -scale-y-50", async () => {
		const code = `<img class="-scale-x-50 -scale-y-50" />`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("-scale-x-50");
		expect(result.messages[0].message).toContain("-scale-y-50");
		expect(result.messages[0].message).toContain("-scale-50");
	});

	it("should report for h-10 w-10", async () => {
		const code = `<div class="h-10 w-10">New size-* utilities</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("h-10");
		expect(result.messages[0].message).toContain("w-10");
		expect(result.messages[0].message).toContain("size-10");
	});

	it("should report for h-10 md:h-5 md:w-5 lg:w-10", async () => {
		const code = `<div class="h-10 md:h-5 md:w-5 lg:w-10">New size-* utilities</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("md:h-5");
		expect(result.messages[0].message).toContain("md:w-5");
		expect(result.messages[0].message).toContain("md:size-5");
	});

	it.fails("should report for h-custom w-custom with custom spacing only", async () => {
		const code = `<div class="h-custom w-custom">size-*</div>`;
		const eslintWithOptions = loadEslint({
			rules: {
				"tailwindcss/shorthand": "error",
			},
		});
		const [result] = await eslintWithOptions.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("h-custom");
		expect(result.messages[0].message).toContain("w-custom");
		expect(result.messages[0].message).toContain("size-custom");
	});

	it.fails("should report for overflow-hidden text-ellipsis whitespace-nowrap", async () => {
		const code = `
      <div class="overflow-hidden text-ellipsis whitespace-nowrap">
        Possible shorthand when using truncate
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("overflow-hidden");
		expect(result.messages[0].message).toContain("text-ellipsis");
		expect(result.messages[0].message).toContain("whitespace-nowrap");
		expect(result.messages[0].message).toContain("truncate");
	});

	it.fails("should report for md:overflow-hidden md:text-ellipsis md:whitespace-nowrap", async () => {
		const code = `
      <div class="md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">
        Possible shorthand when using truncate with breakpoint
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("md:overflow-hidden");
		expect(result.messages[0].message).toContain("md:text-ellipsis");
		expect(result.messages[0].message).toContain("md:whitespace-nowrap");
		expect(result.messages[0].message).toContain("md:truncate");
	});

	it.fails("should report for hover:overflow-hidden hover:text-ellipsis hover:whitespace-nowrap", async () => {
		const code = `
      <div class="hover:overflow-hidden hover:text-ellipsis hover:whitespace-nowrap">
        Possible shorthand when using truncate with hover
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("hover:overflow-hidden");
		expect(result.messages[0].message).toContain("hover:text-ellipsis");
		expect(result.messages[0].message).toContain("hover:whitespace-nowrap");
		expect(result.messages[0].message).toContain("hover:truncate");
	});

	it("should report for px-10 py-10", async () => {
		const code = "<div className={ctl(`${live && 'bg-white'} w-full px-10 py-10`)}>Leading space trim issue with fix</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].message).toContain("px-10");
		expect(result.messages[0].message).toContain("py-10");
		expect(result.messages[0].message).toContain("p-10");
	});

	it.fails("should resolve francoismassart/eslint-plugin-tailwindcss#376", async () => {
		const code = `<div class="content-center justify-center sm:items-start sm:justify-items-start md:self-end md:justify-self-end lg:self-start lg:justify-self-center">issue #376</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });

		expect(result.messages).toHaveLength(3);

		// `content-` and `justify-` can be combined with `place-content-`
		expect(result.messages[0].message).toContain("content-center");
		expect(result.messages[0].message).toContain("justify-center");
		expect(result.messages[0].message).toContain("place-content-center");

		// `items-` and `justify-items` can be combined with `place-items`
		expect(result.messages[1].message).toContain("sm:items-start");
		expect(result.messages[1].message).toContain("sm:place-items-start");
		expect(result.messages[1].message).toContain("sm:justify-items-start");

		// `self-` and `justify-self-` can be combined with `place-self-`
		expect(result.messages[2].message).toContain("md:self-end");
		expect(result.messages[2].message).toContain("md:justify-self-end");
		expect(result.messages[2].message).toContain("md:place-self-end");
	});
});
