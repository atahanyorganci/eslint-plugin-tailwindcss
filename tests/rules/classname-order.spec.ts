import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`classname-order`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/classname-order": "error",
			},
		});
	});

	it("should not report an error with simple content", async () => {
		const result = await eslint.lintText(`<div class="custom container box-content lg:box-border">Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0);
	});

	it("should report an error with simple content", async () => {
		const result = await eslint.lintText(`<div class="text-red-500 font-light">Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report an error with simple content for JSX expression container", async () => {
		const result = await eslint.lintText(`<div class={"text-red-500 font-light"}>Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report an error with simple content for JSX expression container with template literal", async () => {
		const result = await eslint.lintText(`<div class={\`text-red-500 font-light\`}>Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});
});

function loadEslintTw() {
	const config = loadEslint({
		rules: {
			"tailwindcss/classname-order": "error",
		},
		settings: {
			tailwindcss: {
				config: {
					classRegex: "^tw$",
				},
			},
		},
	});
	return config;
}

describe("`classname-order` (legacy conversions)", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/classname-order": "error",
			},
		});
	});

	it("should not report for simple content", async () => {
		const code = `<div class="custom container box-content lg:box-border">Simple, basic</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report error for simple content with 'tw' prop", async () => {
		const code = `<div tw="custom container box-content lg:box-border">Simple, basic</div>`;
		const [result] = await loadEslintTw().lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for template literal with expression", async () => {
		const code = "<div className={clsx(`w-full p-10 ${live && 'bg-blue-100 sm:rounded-lg dark:bg-purple-400'}`)}>ctl + exp</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for template literal with variable", async () => {
		const code = "<div className={ctl(`h-48 w-48 rounded-full bg-blue-500 ${className}`)}>ctl + var</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report an error and autofix for template literal", async () => {
		const code = "<div className={ctl(`w-full p-10 ${live && 'bg-white dark:bg-black'}`)}>Space trim issue</div>";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report function call with template literal", async () => {
		const code = `
		ctl(\`
			flex items-center justify-center
			\${variant === SpinnerVariant.OVERLAY && \`z-60 rounded border-2 bg-gray-400 px-4 \${widthClass} \${heightClass}\`}
			\${
				variant === SpinnerVariant.FULLSCREEN &&
				\`z-60 fixed bottom-0 left-0 right-0 top-0 bg-white bg-opacity-60 px-4 dark:bg-purple-900 dark:bg-opacity-60\`
			}
		\`)`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for class attribute with single quotes", async () => {
		const code = `<div class='box-content lg:box-border'>Simple quotes</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for class attribute with extra space at the end", async () => {
		const code = `<div class="space-y-0.5 ">Extra space at the end</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for class attribute with 'tw' prop", async () => {
		const code = `<div tw="space-y-0.5 ">Extra space at the end, but with 'tw' prop</div>`;
		const [result] = await loadEslintTw().lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for class attribute with 'p', then 'py' then 'px'", async () => {
		const code = `<div class="p-5 sm:px-3 md:py-2 lg:p-4 xl:px-6">'p', then 'py' then 'px'</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for function call with multi-line classes", async () => {
		const code = `
		ctl(\`
			container
			flex
			w-12
			sm:w-6
			lg:w-4
		\`)`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for custom prefix", async () => {
		const code = `<div class="lorem-w-12 lg:lorem-w-6">Custom prefix</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for arbitrary value", async () => {
		const code = `<div class="w-12 lg:w-[500px]">Allowed arbitrary value</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for stackable variants", async () => {
		const code = `<div class="dark:focus:hover:bg-black md:dark:disabled:focus:hover:bg-gray-400">Stackable variants</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for clsx", async () => {
		const code = `<div className={clsx(\`absolute bottom-0 flex h-[270px] w-full flex-col\`)}>clsx</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	// TODO: Rule options override shared settings override defaults
	it("should not report for options override shared settings", async () => {
		const code = `<div class="opts-w-12 lg:opts-w-6">Options override shared settings</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for extra spaces", async () => {
		const code = `<div class="   flex  space-y-0.5   ">Extra spaces</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not report for long class values", async () => {
		const code = `
      <div class="custom custom2 group peer bg-opacity-50 ring-opacity-50 pointer-events-auto visible sr-only sticky inset-0 inset-x-2 inset-y-1 top-3 right-4 bottom-5 left-6 isolate z-auto order-1 col-span-1 col-start-2 col-end-3 row-span-1 row-start-2 row-end-3 float-left clear-both container m-0 mx-1.5 my-px mt-1 mr-2 mb-3 ml-4 box-border block aspect-auto h-0 max-h-fit min-h-full w-0 max-w-fit min-w-full flex-none flex-shrink shrink flex-grow grow basis-0 table-fixed border-collapse origin-bottom-right translate-x-px translate-y-2 scale-0 scale-x-75 scale-y-50 rotate-90 skew-x-2 skew-y-0 transform transform-gpu transform-none animate-spin cursor-text touch-auto resize-none snap-x snap-mandatory snap-center snap-always scroll-m-0 scroll-mx-1.5 scroll-my-px scroll-mt-1 scroll-mr-2 scroll-mb-3 scroll-ml-4 scroll-p-0 scroll-px-1.5 scroll-py-px scroll-pt-1 scroll-pr-2 scroll-pb-3 scroll-pl-4 list-outside list-decimal appearance-none columns-1 break-before-avoid-page break-inside-avoid-column break-after-auto auto-cols-min grid-flow-col auto-rows-min grid-cols-1 grid-rows-1 flex-col flex-wrap place-content-between place-items-stretch content-between items-baseline justify-start justify-items-center gap-0 space-y-0 space-y-reverse gap-x-1 space-x-1 space-x-reverse gap-y-2 divide-x-2 divide-y-4 divide-y-reverse divide-dashed divide-black place-self-end self-baseline justify-self-stretch overflow-hidden overflow-x-auto overflow-y-scroll overscroll-auto overscroll-x-contain overscroll-y-none scroll-smooth rounded rounded-t-xl rounded-l-none rounded-tl-xl rounded-r-2xl rounded-tr-2xl rounded-b-sm rounded-br-sm rounded-bl-none border-0 border-x-2 border-y-2 border-t-4 border-r-4 border-b border-l border-solid border-black border-x-slate-50 border-y-transparent border-t-white border-r-transparent border-b-inherit border-l-current bg-current bg-none from-current via-black to-orange-500 box-decoration-clone decoration-clone bg-auto bg-fixed bg-clip-padding bg-bottom bg-no-repeat bg-origin-border fill-white stroke-white stroke-2 object-contain object-bottom p-0 px-1.5 py-px pt-1 pr-2 pb-3 pl-4 text-left indent-px align-top font-sans text-lg leading-4 font-semibold tracking-normal break-words overflow-ellipsis text-ellipsis whitespace-nowrap text-current uppercase italic ordinal underline decoration-black decoration-double decoration-from-font underline-offset-auto subpixel-antialiased caret-black accent-black opacity-50 bg-blend-lighten mix-blend-darken shadow-lg ring-1 shadow-white ring-white ring-offset-2 ring-offset-current outline-0 outline-offset-1 outline-current blur brightness-50 contrast-100 drop-shadow-xl grayscale hue-rotate-90 invert saturate-100 sepia filter backdrop-blur-lg backdrop-brightness-110 backdrop-contrast-125 backdrop-grayscale backdrop-hue-rotate-90 backdrop-invert backdrop-opacity-30 backdrop-saturate-100 backdrop-sepia transition-all delay-150 duration-1000 ease-linear will-change-scroll content-none outline-dotted select-none [--scroll-offset:56px] divide-x-reverse ring-inset">no plugin</div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should resolve francoismassart/eslint-plugin-tailwindcss#142", async () => {
		const code = `
		<div>
				<h1>francoismassart/eslint-plugin-tailwindcss#142</h1>
				<div class="unselectable absolute box-content cursor-pointer rounded-full p-1.5 text-center transition-colors transition-transform duration-300 select-none">1</div>
				<div class="dark:after:border-t-blue-dark/40 dark:after:border-l-blue-dark/40 before:border-l-blue-mid before:border-t-blue-mid after:border-t-blue-subtle after:border-l-blue-subtle border-transparent before:border-transparent dark:before:border-transparent">2</div>
				<div class="text-neutral-750 theme-contrast:text-black absolute -top-4 -right-1 cursor-pointer rounded-tr-sm rounded-bl-sm px-2.5 py-2 text-sm opacity-0 transition-opacity group-hover:opacity-50 group-hover:hover:opacity-100">3</div>
				<div class="text-yellow-darker/50 dark:text-yellow-strong/70 hover:text-yellow-darker dark:hover:text-yellow-strong relative flex cursor-pointer items-center justify-center pt-2 pb-2 transition-colors">4</div>
				<div class="text-yellow-darker/50 dark:text-yellow-strong/70 hover:text-yellow-darker dark:hover:text-yellow-strong relative flex cursor-pointer items-center justify-center pt-2 pb-2 transition-colors">5</div>
				<div class="group relative -mx-1.5 my-0 block rounded px-1.5 pt-3.5 pb-4 transition-colors duration-150 hover:text-black active:top-0 dark:hover:text-white">6</div>
				<div class="bg-neutral-70 theme-contrast:bg-white dark:bg-gray-780 pointer-events-none fixed top-0 left-0 h-screen w-screen opacity-70">7</div>
				<div class="dark:before:border-t-blue-dark/40 dark:before:border-l-blue-dark/40 dark:after:border-t-blue-dark/40 dark:after:border-l-blue-dark/40 before:border-t-blue-subtle before:border-l-blue-subtle after:border-t-blue-subtle after:border-l-blue-subtle border-transparent">8</div>
				<div class="dark:bg-blue-dark/40 bg-blue-subtle dark:text-blue-strong border-none text-black">9</div>
				<div class="m-3 inline-block h-4 w-4 rounded-full transition-transform">10</div>
			</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should not error for typing", async () => {
		const code = `<div class>Simple, basic</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(0);
	});

	it("should report an error for invalid order", async () => {
		const code = `<h1 className={"absolute bottom-0 w-full flex flex-col"}>Welcome {name}</h1>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toContain(`"absolute bottom-0 flex w-full flex-col"`);
	});

	it("should report an error for invalid order 3", async () => {
		const code = `<div class="sm:w-6 container w-12">Classnames will be ordered</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toContain(`"container w-12 sm:w-6"`);
	});

	it("should report an error for invalid order 4", async () => {
		const code = `<div class="sm:py-5 p-4 sm:px-7 lg:p-8">Enhancing readability</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"p-4 sm:px-7 sm:py-5 lg:p-8"`);
	});

	it.fails("should report an error for invalid order 4 with 'tw' prop", async () => {
		const code = `<div tw="sm:py-5 p-4 sm:px-7 lg:p-8">Enhancing readability</div>`;
		const [result] = await loadEslintTw().lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"p-4 sm:px-7 sm:py-5 lg:p-8"`);
	});

	it("should report an error for invalid order 5", async () => {
		const code = `<div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">...</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:px-8 sm:py-12 md:py-16"`);
	});

	it.fails("should report an error for template literal in function call", async () => {
		const code = "ctl(`p-10 w-full ${some}`)";
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"w-full p-10 "`);
	});

	it.fails("should report an error for template literal and fix should trim whitespace", async () => {
		const code = "<div className={ctl(`p-10 w-full  ${live && 'bg-white dark:bg-black'}`)}>Space trim issue with fix</div>";
		const [result] = await loadEslintTw().lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"w-full p-10 "`);
	});

	it.fails("should report an error for prose plugin", async () => {
		const code = `<div class="md:prose-2xl prose-xl prose sm:prose-sm"></div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"prose prose-xl sm:prose-sm md:prose-2xl"`);
	});

	it("should report an error for line-clamp plugin", async () => {
		const code = `<div class="sm:line-clamp-3 line-clamp-2">...</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"line-clamp-2 sm:line-clamp-3"`);
	});

	it("should report an error for simple quotes", async () => {
		const code = `<div class='lg:box-border box-content'>Simple quotes</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"box-content lg:box-border"`);
	});

	it("should report an error and fix with whitespace trimmed", async () => {
		const code = `<div class="w-12  lg:w-6   w-12">Single line dups + no head/tail spaces</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"w-12 w-12 lg:w-6"`);
	});

	it.fails("should report an error for parts of template literal", async () => {
		const code = `
      const buttonClasses = ctl(\`
        \${fullWidth ? "w-12" : "w-6"}
        container
        \${fullWidth ? "sm:w-8" : "sm:w-4"}
        lg:w-9
        flex
        \${hasError && "bg-red"}
      \`);`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toMatch(/flex\s+lg:w-9/);
	});

	it.fails("should report an error for parts of template literal 2", async () => {
		const code = `
      const buttonClasses = ctl(\`
        \${fullWidth ? "w-12" : "w-6"}
        flex
        container
        \${fullWidth ? "sm:w-7" : "sm:w-4"}
        lg:py-4
        sm:py-6
        \${hasError && "bg-red"}
      \`);`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].fix?.text).toMatch(/container\s+flex/);
		expect(result.messages[1].fix?.text).toMatch(/sm:py-6\s+lg:py-4/);
	});

	it("should report an error for arbitrary value but incorrect order", async () => {
		const code = `<div class="sm:w-12 w-[320px]">Allowed arbitrary value but incorrect order</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"w-[320px] sm:w-12"`);
	});

	// TODO: callees
	it.fails("should report an error for clsx", async () => {
		const code = `clsx(\`absolute bottom-0 w-full h-[70px] flex flex-col\`);`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"absolute bottom-0 flex h-[70px] w-full flex-col"`);
	});

	// TODO: callees
	it.fails("should report an error for cva", async () => {
		const code = `cva({
			primary: ["absolute bottom-0 w-full h-[70px] flex flex-col"],
		})`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"absolute bottom-0 flex h-[70px] w-full flex-col"`);
	});

	// TODO: callees
	it.fails("should report an error clsx inside JSX with template literal", async () => {
		const code = `<div className={clsx(\`absolute bottom-0 w-full h-[70px] flex flex-col\`)}>clsx</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"absolute bottom-0 flex h-[70px] w-full flex-col"`);
	});

	it.fails("should report errors for template literal parts", async () => {
		const code = `
      ctl(\`
        px-2
        flex
        \${
          !isDisabled &&
          \`
            top-0
            flex
            border-0
          \`
        }
        \${
          isDisabled &&
          \`
            border-0
            mx-0
          \`
        }
      \`)
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].fix?.text).toMatch(/flex\s+px-2/);
		expect(result.messages[1].fix?.text).toMatch(/mx-0\s+border-0/);
	});

	it("should report an error simple", async () => {
		const code = `<div className="px-2 flex">...</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"flex px-2"`);
	});

	it.fails("should report an error for template literal", async () => {
		const code = `ctl(\`px-2 flex\`)`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"flex px-2"`);
	});

	it.fails("should report an error for template literal 2", async () => {
		const code = `
      ctl(\`
        px-2
        flex
      \`)
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toMatch(/flex\s+px-2/);
	});

	it.fails("should resolve francoismassart/eslint-plugin-tailwindcss#19", async () => {
		const code = `
      <div
        className="
          right-0
          fixed
          top-0
          left-0
          bottom-0
          transform
          transition-all"
      >
        #19
      </div>
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).match(/fixed\s+bottom-0\s+left-0\s+right-0\s+top-0\s+transform\s+transition-all/);
	});

	it.fails("should report an error for template literal 3", async () => {
		const code = `
      <div
        className={clsx(
          "w-full h-10 rounded",
          name === "white"
            ? "ring-black flex"
            : undefined
        )}
      />
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toMatch(/w-full\s+h-10\s+rounded/);
		expect(result.messages[0].fix?.text).toMatch(/flex\s+ring-black/);
	});

	// TODO: callees
	it.fails("should report an error for array elements", async () => {
		const code = `
      <div className={classnames(['invalid lg:w-4 sm:w-6', ['w-12 flex']])} />
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toMatch(/invalid\s+sm:w-6\s+lg:w-4/);
		expect(result.messages[0].fix?.text).toMatch(/flex\s+w-12/);
	});

	it.fails("should report an error for object keys", async () => {
		const code = `
      <div className={classnames({
        invalid,
        flex: myFlag,
        'lg:w-4 sm:w-6': resize
      })} />
      `;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"sm:w-6 lg:w-4"`);
	});

	it("should report an error for class attribute", async () => {
		const code = `<div class="first:flex animate-spin custom container">Using official sorting</div>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"custom container animate-spin first:flex"`);
	});

	it("should report an error for class attribute for SVG", async () => {
		const code = `<svg class="stroke-[var(--some)] stroke-['yolo'] stroke-[angle:var(--some)]"></svg>`;
		const [result] = await eslint.lintText(code, { filePath: "test.tsx" });
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"stroke-['yolo'] stroke-[angle:var(--some)] stroke-[var(--some)]"`);
	});
});
