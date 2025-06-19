import type { ResolvedConfig } from "./tailwind-merge.js";
import { beforeAll, describe, expect, it } from "vitest";
import { extendDefaultConfig, parseClassName } from "./tailwind-merge.js";

describe("`parseClassName` - Layout", () => {
	let config: ResolvedConfig;

	beforeAll(() => {
		config = extendDefaultConfig({});
	});

	/**
	 * @see https://tailwindcss.com/docs/aspect-ratio
	 */
	it("should parse aspect-ratio classes", () => {
		expect(parseClassName(config, "aspect-square")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-square",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-video")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-video",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-1/2",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-4/3")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-4/3",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-16/9")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-16/9",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-[1/2]")).toMatchInlineSnapshot(`
			{
			  "args": "aspect-[1/2]",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/columns
	 */
	it("should parse columns classes", () => {
		expect(parseClassName(config, "columns-1")).toMatchInlineSnapshot(`
			{
			  "args": "columns-1",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2")).toMatchInlineSnapshot(`
			{
			  "args": "columns-2",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3")).toMatchInlineSnapshot(`
			{
			  "args": "columns-3",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-4")).toMatchInlineSnapshot(`
			{
			  "args": "columns-4",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3xs")).toMatchInlineSnapshot(`
			{
			  "args": "columns-3xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2xs")).toMatchInlineSnapshot(`
			{
			  "args": "columns-2xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-xs")).toMatchInlineSnapshot(`
			{
			  "args": "columns-xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-sm")).toMatchInlineSnapshot(`
			{
			  "args": "columns-sm",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-md")).toMatchInlineSnapshot(`
			{
			  "args": "columns-md",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-lg")).toMatchInlineSnapshot(`
			{
			  "args": "columns-lg",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-2xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-3xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-4xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-4xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-5xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-5xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-6xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-6xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-7xl")).toMatchInlineSnapshot(`
			{
			  "args": "columns-7xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-auto")).toMatchInlineSnapshot(`
			{
			  "args": "columns-auto",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-[3]")).toMatchInlineSnapshot(`
			{
			  "args": "columns-[3]",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-[var(--custom-columns)]")).toMatchInlineSnapshot(`
			{
			  "args": "columns-[var(--custom-columns)]",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/break-after
	 */
	it("should parse break-after classes", () => {
		expect(parseClassName(config, "break-after-auto")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-auto",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-avoid")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-avoid",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-all")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-all",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-avoid-page")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-avoid-page",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-page")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-page",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-left")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-left",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-right")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-right",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-column")).toMatchInlineSnapshot(`
			{
			  "args": "break-after-column",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/break-before
	 */
	it("should parse break-before classes", () => {
		expect(parseClassName(config, "break-before-auto")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-auto",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-avoid")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-avoid",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-all")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-all",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-avoid-page")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-avoid-page",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-page")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-page",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-left")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-left",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-right")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-right",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-column")).toMatchInlineSnapshot(`
			{
			  "args": "break-before-column",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/break-inside
	 */
	it("should parse break-inside classes", () => {
		expect(parseClassName(config, "break-inside-auto")).toMatchInlineSnapshot(`
			{
			  "args": "break-inside-auto",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid")).toMatchInlineSnapshot(`
			{
			  "args": "break-inside-avoid",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid-page")).toMatchInlineSnapshot(`
			{
			  "args": "break-inside-avoid-page",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid-column")).toMatchInlineSnapshot(`
			{
			  "args": "break-inside-avoid-column",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/box-decoration-break
	 */
	it("should parse box-decoration-break classes", () => {
		expect(parseClassName(config, "box-decoration-clone")).toMatchInlineSnapshot(`
			{
			  "args": "box-decoration-clone",
			  "classGroup": "box-decoration",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "box-decoration-slice")).toMatchInlineSnapshot(`
			{
			  "args": "box-decoration-slice",
			  "classGroup": "box-decoration",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/box-sizing
	 */
	it("should parse box-sizing classes", () => {
		expect(parseClassName(config, "box-border")).toMatchInlineSnapshot(`
			{
			  "args": "box-border",
			  "classGroup": "box",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "box-content")).toMatchInlineSnapshot(`
			{
			  "args": "box-content",
			  "classGroup": "box",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/display
	 */
	it("should parse display classes", () => {
		expect(parseClassName(config, "block")).toMatchInlineSnapshot(`
			{
			  "args": "block",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline")).toMatchInlineSnapshot(`
			{
			  "args": "inline",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-block")).toMatchInlineSnapshot(`
			{
			  "args": "inline-block",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flow-root")).toMatchInlineSnapshot(`
			{
			  "args": "flow-root",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex")).toMatchInlineSnapshot(`
			{
			  "args": "flex",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-flex")).toMatchInlineSnapshot(`
			{
			  "args": "inline-flex",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid")).toMatchInlineSnapshot(`
			{
			  "args": "grid",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-grid")).toMatchInlineSnapshot(`
			{
			  "args": "inline-grid",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "contents")).toMatchInlineSnapshot(`
			{
			  "args": "contents",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table")).toMatchInlineSnapshot(`
			{
			  "args": "table",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-table")).toMatchInlineSnapshot(`
			{
			  "args": "inline-table",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-caption")).toMatchInlineSnapshot(`
			{
			  "args": "table-caption",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-cell")).toMatchInlineSnapshot(`
			{
			  "args": "table-cell",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-column")).toMatchInlineSnapshot(`
			{
			  "args": "table-column",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-column-group")).toMatchInlineSnapshot(`
			{
			  "args": "table-column-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-footer-group")).toMatchInlineSnapshot(`
			{
			  "args": "table-footer-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-header-group")).toMatchInlineSnapshot(`
			{
			  "args": "table-header-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-row-group")).toMatchInlineSnapshot(`
			{
			  "args": "table-row-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-row")).toMatchInlineSnapshot(`
			{
			  "args": "table-row",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "list-item")).toMatchInlineSnapshot(`
			{
			  "args": "list-item",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "hidden")).toMatchInlineSnapshot(`
			{
			  "args": "hidden",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/float
	 */
	it("should parse float classes", () => {
		expect(parseClassName(config, "float-right")).toMatchInlineSnapshot(`
			{
			  "args": "float-right",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-left")).toMatchInlineSnapshot(`
			{
			  "args": "float-left",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-start")).toMatchInlineSnapshot(`
			{
			  "args": "float-start",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-end")).toMatchInlineSnapshot(`
			{
			  "args": "float-end",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-none")).toMatchInlineSnapshot(`
			{
			  "args": "float-none",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/clear
	 */
	it("should parse clear classes", () => {
		expect(parseClassName(config, "clear-left")).toMatchInlineSnapshot(`
			{
			  "args": "clear-left",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-right")).toMatchInlineSnapshot(`
			{
			  "args": "clear-right",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-both")).toMatchInlineSnapshot(`
			{
			  "args": "clear-both",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-start")).toMatchInlineSnapshot(`
			{
			  "args": "clear-start",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-end")).toMatchInlineSnapshot(`
			{
			  "args": "clear-end",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-none")).toMatchInlineSnapshot(`
			{
			  "args": "clear-none",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/isolation
	 */
	it("should parse isolation classes", () => {
		expect(parseClassName(config, "isolate")).toMatchInlineSnapshot(`
			{
			  "args": "isolate",
			  "classGroup": "isolation",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "isolation-auto")).toMatchInlineSnapshot(`
			{
			  "args": "isolation-auto",
			  "classGroup": "isolation",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/object-fit
	 */
	it("should parse object-fit classes", () => {
		expect(parseClassName(config, "object-contain")).toMatchInlineSnapshot(`
			{
			  "args": "object-contain",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-cover")).toMatchInlineSnapshot(`
			{
			  "args": "object-cover",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-fill")).toMatchInlineSnapshot(`
			{
			  "args": "object-fill",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-none")).toMatchInlineSnapshot(`
			{
			  "args": "object-none",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-scale-down")).toMatchInlineSnapshot(`
			{
			  "args": "object-scale-down",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/object-position
	 */
	it("should parse object-position classes", () => {
		expect(parseClassName(config, "object-top-left")).toMatchInlineSnapshot(`
			{
			  "args": "object-top-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-top")).toMatchInlineSnapshot(`
			{
			  "args": "object-top",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-top-right")).toMatchInlineSnapshot(`
			{
			  "args": "object-top-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-left")).toMatchInlineSnapshot(`
			{
			  "args": "object-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-center")).toMatchInlineSnapshot(`
			{
			  "args": "object-center",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-right")).toMatchInlineSnapshot(`
			{
			  "args": "object-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom-left")).toMatchInlineSnapshot(`
			{
			  "args": "object-bottom-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom")).toMatchInlineSnapshot(`
			{
			  "args": "object-bottom",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom-right")).toMatchInlineSnapshot(`
			{
			  "args": "object-bottom-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-[25%_75%]")).toMatchInlineSnapshot(`
			{
			  "args": "object-[25%_75%]",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/overflow
	 */
	it("should parse overflow classes", () => {
		expect(parseClassName(config, "overflow-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-auto",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-hidden")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-hidden",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-clip")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-clip",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-visible")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-visible",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-scroll")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-scroll",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-x-auto",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-y-auto",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-hidden")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-x-hidden",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-hidden")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-y-hidden",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-clip")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-x-clip",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-clip")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-y-clip",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-visible")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-x-visible",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-visible")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-y-visible",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-scroll")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-x-scroll",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-scroll")).toMatchInlineSnapshot(`
			{
			  "args": "overflow-y-scroll",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/overscroll-behavior
	 */
	it("should parse overscroll-behavior classes", () => {
		expect(parseClassName(config, "overscroll-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-auto",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-contain")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-contain",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-none")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-none",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-x-auto",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-contain")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-x-contain",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-none")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-x-none",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-auto")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-y-auto",
			  "classGroup": "overscroll-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-contain")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-y-contain",
			  "classGroup": "overscroll-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-none")).toMatchInlineSnapshot(`
			{
			  "args": "overscroll-y-none",
			  "classGroup": "overscroll-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/position
	 */
	it("should parse position classes", () => {
		expect(parseClassName(config, "static")).toMatchInlineSnapshot(`
			{
			  "args": "static",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "fixed")).toMatchInlineSnapshot(`
			{
			  "args": "fixed",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "absolute")).toMatchInlineSnapshot(`
			{
			  "args": "absolute",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "relative")).toMatchInlineSnapshot(`
			{
			  "args": "relative",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "sticky")).toMatchInlineSnapshot(`
			{
			  "args": "sticky",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/top-right-bottom-left
	 */
	it("should parse inset classes", () => {
		expect(parseClassName(config, "inset-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-0",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-0",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-1",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-1",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-px",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-px",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-full",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-full",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-auto")).toMatchInlineSnapshot(`
			{
			  "args": "inset-auto",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "inset-[10px]",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-0",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-0",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-1",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-x-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-1",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-x-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-px",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-px",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-full",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-full",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-auto")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-auto",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "inset-x-[10px]",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-0",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-0")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-0",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-1",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-y-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-1",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-y-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-px",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-px")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-px",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-full",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-full")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-full",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-auto")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-auto",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "inset-y-[10px]",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-0")).toMatchInlineSnapshot(`
			{
			  "args": "start-0",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-0")).toMatchInlineSnapshot(`
			{
			  "args": "start-0",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "start-1",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-start-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "start-1",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "start-px")).toMatchInlineSnapshot(`
			{
			  "args": "start-px",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-px")).toMatchInlineSnapshot(`
			{
			  "args": "start-px",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-full")).toMatchInlineSnapshot(`
			{
			  "args": "start-full",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-full")).toMatchInlineSnapshot(`
			{
			  "args": "start-full",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-auto")).toMatchInlineSnapshot(`
			{
			  "args": "start-auto",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "start-[10px]",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-0")).toMatchInlineSnapshot(`
			{
			  "args": "end-0",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-0")).toMatchInlineSnapshot(`
			{
			  "args": "end-0",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "end-1",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-end-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "end-1",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "end-px")).toMatchInlineSnapshot(`
			{
			  "args": "end-px",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-px")).toMatchInlineSnapshot(`
			{
			  "args": "end-px",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-full")).toMatchInlineSnapshot(`
			{
			  "args": "end-full",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-full")).toMatchInlineSnapshot(`
			{
			  "args": "end-full",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-auto")).toMatchInlineSnapshot(`
			{
			  "args": "end-auto",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "end-[10px]",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-0")).toMatchInlineSnapshot(`
			{
			  "args": "top-0",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-0")).toMatchInlineSnapshot(`
			{
			  "args": "top-0",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "top-1",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-top-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "top-1",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "top-px")).toMatchInlineSnapshot(`
			{
			  "args": "top-px",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-px")).toMatchInlineSnapshot(`
			{
			  "args": "top-px",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-full")).toMatchInlineSnapshot(`
			{
			  "args": "top-full",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-full")).toMatchInlineSnapshot(`
			{
			  "args": "top-full",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-auto")).toMatchInlineSnapshot(`
			{
			  "args": "top-auto",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "top-[10px]",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-0")).toMatchInlineSnapshot(`
			{
			  "args": "right-0",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-0")).toMatchInlineSnapshot(`
			{
			  "args": "right-0",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "right-1",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-right-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "right-1",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "right-px")).toMatchInlineSnapshot(`
			{
			  "args": "right-px",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-px")).toMatchInlineSnapshot(`
			{
			  "args": "right-px",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-full")).toMatchInlineSnapshot(`
			{
			  "args": "right-full",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-full")).toMatchInlineSnapshot(`
			{
			  "args": "right-full",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-auto")).toMatchInlineSnapshot(`
			{
			  "args": "right-auto",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "right-[10px]",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-0")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-0",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-0")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-0",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-1",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-bottom-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-1",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "bottom-px")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-px",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-px")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-px",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-full")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-full",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-full")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-full",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-auto")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-auto",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "bottom-[10px]",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-0")).toMatchInlineSnapshot(`
			{
			  "args": "left-0",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-0")).toMatchInlineSnapshot(`
			{
			  "args": "left-0",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "left-1",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-left-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "left-1",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "left-px")).toMatchInlineSnapshot(`
			{
			  "args": "left-px",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-px")).toMatchInlineSnapshot(`
			{
			  "args": "left-px",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-full")).toMatchInlineSnapshot(`
			{
			  "args": "left-full",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-full")).toMatchInlineSnapshot(`
			{
			  "args": "left-full",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-auto")).toMatchInlineSnapshot(`
			{
			  "args": "left-auto",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "left-[10px]",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/visibility
	 */
	it("should parse visibility classes", () => {
		expect(parseClassName(config, "visible")).toMatchInlineSnapshot(`
			{
			  "args": "visible",
			  "classGroup": "visibility",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "invisible")).toMatchInlineSnapshot(`
			{
			  "args": "invisible",
			  "classGroup": "visibility",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "collapse")).toMatchInlineSnapshot(`
			{
			  "args": "collapse",
			  "classGroup": "visibility",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/z-index
	 */
	it("should parse z-index classes", () => {
		expect(parseClassName(config, "z-0")).toMatchInlineSnapshot(`
			{
			  "args": "z-0",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-10")).toMatchInlineSnapshot(`
			{
			  "args": "z-10",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-20")).toMatchInlineSnapshot(`
			{
			  "args": "z-20",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-30")).toMatchInlineSnapshot(`
			{
			  "args": "z-30",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-40")).toMatchInlineSnapshot(`
			{
			  "args": "z-40",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-50")).toMatchInlineSnapshot(`
			{
			  "args": "z-50",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-auto")).toMatchInlineSnapshot(`
			{
			  "args": "z-auto",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-[100]")).toMatchInlineSnapshot(`
			{
			  "args": "z-[100]",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});
});
