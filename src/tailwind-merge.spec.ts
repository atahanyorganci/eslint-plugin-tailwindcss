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

describe("`parseClassName` - Flexbox & Grid", () => {
	let config: ResolvedConfig;

	beforeAll(() => {
		config = extendDefaultConfig({});
	});

	/**
	 * @see https://tailwindcss.com/docs/flex-basis
	 */
	it("should parse flex-basis classes", () => {
		expect(parseClassName(config, "basis-0")).toMatchInlineSnapshot(`
			{
			  "args": "basis-0",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-1/2")).toMatchInlineSnapshot(`
			{
			  "args": "basis-1",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "basis-full")).toMatchInlineSnapshot(`
			{
			  "args": "basis-full",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-auto")).toMatchInlineSnapshot(`
			{
			  "args": "basis-auto",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-3xs")).toMatchInlineSnapshot(`
			{
			  "args": "basis-3xs",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-2xl")).toMatchInlineSnapshot(`
			{
			  "args": "basis-2xl",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-[100px]")).toMatchInlineSnapshot(`
			{
			  "args": "basis-[100px]",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/flex-direction
	 */
	it("should parse flex-direction classes", () => {
		expect(parseClassName(config, "flex-row")).toMatchInlineSnapshot(`
			{
			  "args": "flex-row",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-row-reverse")).toMatchInlineSnapshot(`
			{
			  "args": "flex-row-reverse",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-col")).toMatchInlineSnapshot(`
			{
			  "args": "flex-col",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-col-reverse")).toMatchInlineSnapshot(`
			{
			  "args": "flex-col-reverse",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/flex-wrap
	 */
	it("should parse flex-wrap classes", () => {
		expect(parseClassName(config, "flex-nowrap")).toMatchInlineSnapshot(`
			{
			  "args": "flex-nowrap",
			  "classGroup": "flex-wrap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-wrap")).toMatchInlineSnapshot(`
			{
			  "args": "flex-wrap",
			  "classGroup": "flex-wrap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-wrap-reverse")).toMatchInlineSnapshot(`
			{
			  "args": "flex-wrap-reverse",
			  "classGroup": "flex-wrap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/flex
	 */
	it("should parse flex classes", () => {
		expect(parseClassName(config, "flex-1")).toMatchInlineSnapshot(`
			{
			  "args": "flex-1",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-auto")).toMatchInlineSnapshot(`
			{
			  "args": "flex-auto",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-initial")).toMatchInlineSnapshot(`
			{
			  "args": "flex-initial",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-none")).toMatchInlineSnapshot(`
			{
			  "args": "flex-none",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-[1_0_auto]")).toMatchInlineSnapshot(`
			{
			  "args": "flex-[1_0_auto]",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/flex-grow
	 */
	it("should parse flex-grow classes", () => {
		expect(parseClassName(config, "grow")).toMatchInlineSnapshot(`
			{
			  "args": "grow",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-0")).toMatchInlineSnapshot(`
			{
			  "args": "grow-0",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-3")).toMatchInlineSnapshot(`
			{
			  "args": "grow-3",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-[25vw]")).toMatchInlineSnapshot(`
			{
			  "args": "grow-[25vw]",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/flex-shrink
	 */
	it("should parse flex-shrink classes", () => {
		expect(parseClassName(config, "shrink")).toMatchInlineSnapshot(`
			{
			  "args": "shrink",
			  "classGroup": "shrink",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "shrink-0")).toMatchInlineSnapshot(`
			{
			  "args": "shrink-0",
			  "classGroup": "shrink",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "shrink-[calc(100vw-var(--sidebar))]")).toMatchInlineSnapshot(`
			{
			  "args": "shrink-[calc(100vw-var(--sidebar))]",
			  "classGroup": "shrink",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-template-columns
	 */
	it("should parse grid-template-columns classes", () => {
		expect(parseClassName(config, "grid-cols-1")).toMatchInlineSnapshot(`
			{
			  "args": "grid-cols-1",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-none")).toMatchInlineSnapshot(`
			{
			  "args": "grid-cols-none",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-subgrid")).toMatchInlineSnapshot(`
			{
			  "args": "grid-cols-subgrid",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-[200px_minmax(900px,_1fr)_100px]")).toMatchInlineSnapshot(`
			{
			  "args": "grid-cols-[200px_minmax(900px,_1fr)_100px]",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-column
	 */
	it("should parse grid-column classes", () => {
		expect(parseClassName(config, "col-span-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-span-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-span-full")).toMatchInlineSnapshot(`
			{
			  "args": "col-span-full",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-span-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "col-span-[2]",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-start-1",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-start-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-start-1",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-auto")).toMatchInlineSnapshot(`
			{
			  "args": "col-start-auto",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "col-start-[2]",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-end-1",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-end-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-end-1",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-auto")).toMatchInlineSnapshot(`
			{
			  "args": "col-end-auto",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "col-end-[2]",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-auto")).toMatchInlineSnapshot(`
			{
			  "args": "col-auto",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-1")).toMatchInlineSnapshot(`
			{
			  "args": "col-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-[1_/_span_3]")).toMatchInlineSnapshot(`
			{
			  "args": "col-[1_/_span_3]",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-template-rows
	 */
	it("should parse grid-rows classes", () => {
		expect(parseClassName(config, "grid-rows-1")).toMatchInlineSnapshot(`
			{
			  "args": "grid-rows-1",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-rows-none")).toMatchInlineSnapshot(`
			{
			  "args": "grid-rows-none",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-rows-subgrid")).toMatchInlineSnapshot(`
			{
			  "args": "grid-rows-subgrid",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "grid-rows-[200px_minmax(900px,1fr)_100px]"),
		).toMatchInlineSnapshot(`
			{
			  "args": "grid-rows-[200px_minmax(900px,1fr)_100px]",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-row
	 */
	it("should parse grid-row classes", () => {
		expect(parseClassName(config, "row-span-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-span-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-span-full")).toMatchInlineSnapshot(`
			{
			  "args": "row-span-full",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-span-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "row-span-[2]",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-start-1",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-start-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-start-1",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-auto")).toMatchInlineSnapshot(`
			{
			  "args": "row-start-auto",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "row-start-[2]",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-end-1",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-end-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-end-1",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-auto")).toMatchInlineSnapshot(`
			{
			  "args": "row-end-auto",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-[2]")).toMatchInlineSnapshot(`
			{
			  "args": "row-end-[2]",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-auto")).toMatchInlineSnapshot(`
			{
			  "args": "row-auto",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-1")).toMatchInlineSnapshot(`
			{
			  "args": "row-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-[span_16_/_span_16]")).toMatchInlineSnapshot(`
			{
			  "args": "row-[span_16_/_span_16]",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-auto-flow
	 */
	it("should parse grid-auto-flow classes", () => {
		expect(parseClassName(config, "grid-flow-row")).toMatchInlineSnapshot(`
			{
			  "args": "grid-flow-row",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-col")).toMatchInlineSnapshot(`
			{
			  "args": "grid-flow-col",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-dense")).toMatchInlineSnapshot(`
			{
			  "args": "grid-flow-dense",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-row-dense")).toMatchInlineSnapshot(`
			{
			  "args": "grid-flow-row-dense",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-col-dense")).toMatchInlineSnapshot(`
			{
			  "args": "grid-flow-col-dense",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-auto-columns
	 */
	it("should parse grid-auto-columns classes", () => {
		expect(parseClassName(config, "auto-cols-auto")).toMatchInlineSnapshot(`
			{
			  "args": "auto-cols-auto",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-min")).toMatchInlineSnapshot(`
			{
			  "args": "auto-cols-min",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-max")).toMatchInlineSnapshot(`
			{
			  "args": "auto-cols-max",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-fr")).toMatchInlineSnapshot(`
			{
			  "args": "auto-cols-fr",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-[100px]")).toMatchInlineSnapshot(`
			{
			  "args": "auto-cols-[100px]",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/grid-auto-rows
	 */
	it("should parse grid-auto-rows classes", () => {
		expect(parseClassName(config, "auto-rows-auto")).toMatchInlineSnapshot(`
			{
			  "args": "auto-rows-auto",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-min")).toMatchInlineSnapshot(`
			{
			  "args": "auto-rows-min",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-max")).toMatchInlineSnapshot(`
			{
			  "args": "auto-rows-max",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-fr")).toMatchInlineSnapshot(`
			{
			  "args": "auto-rows-fr",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-[100px]")).toMatchInlineSnapshot(`
			{
			  "args": "auto-rows-[100px]",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/gap
	 */
	it("should parse gap classes", () => {
		expect(parseClassName(config, "gap-0")).toMatchInlineSnapshot(`
			{
			  "args": "gap-0",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-px")).toMatchInlineSnapshot(`
			{
			  "args": "gap-px",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "gap-[10px]",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-0")).toMatchInlineSnapshot(`
			{
			  "args": "gap-x-0",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-px")).toMatchInlineSnapshot(`
			{
			  "args": "gap-x-px",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "gap-x-[10px]",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-0")).toMatchInlineSnapshot(`
			{
			  "args": "gap-y-0",
			  "classGroup": "gap-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-px")).toMatchInlineSnapshot(`
			{
			  "args": "gap-y-px",
			  "classGroup": "gap-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "gap-y-[10px]",
			  "classGroup": "gap-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/justify-content
	 */
	it("should parse justify-content classes", () => {
		expect(parseClassName(config, "justify-start")).toMatchInlineSnapshot(`
			{
			  "args": "justify-start",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-end")).toMatchInlineSnapshot(`
			{
			  "args": "justify-end",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "justify-end-safe",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-center")).toMatchInlineSnapshot(`
			{
			  "args": "justify-center",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-center-safe")).toMatchInlineSnapshot(`
			{
			  "args": "justify-center-safe",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-between")).toMatchInlineSnapshot(`
			{
			  "args": "justify-between",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-around")).toMatchInlineSnapshot(`
			{
			  "args": "justify-around",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-evenly")).toMatchInlineSnapshot(`
			{
			  "args": "justify-evenly",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "justify-stretch",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-baseline")).toMatchInlineSnapshot(`
			{
			  "args": "justify-baseline",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-normal")).toMatchInlineSnapshot(`
			{
			  "args": "justify-normal",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/justify-items
	 */
	it("should parse justify-items classes", () => {
		expect(parseClassName(config, "justify-items-start")).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-start",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-end")).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-end",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "justify-items-end-safe"),
		).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-end-safe",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-center")).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-center",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "justify-items-center-safe"),
		).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-center-safe",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-stretch",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-normal")).toMatchInlineSnapshot(`
			{
			  "args": "justify-items-normal",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/justify-self
	 */
	it("should parse justify-self classes", () => {
		expect(parseClassName(config, "justify-self-auto")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-auto",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-start")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-start",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-center")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-center",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "justify-self-center-safe"),
		).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-center-safe",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-end")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-end",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-end-safe",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "justify-self-stretch",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/align-content
	 */
	it("should parse align-content classes", () => {
		expect(parseClassName(config, "content-normal")).toMatchInlineSnapshot(`
			{
			  "args": "content-normal",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-center")).toMatchInlineSnapshot(`
			{
			  "args": "content-center",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-start")).toMatchInlineSnapshot(`
			{
			  "args": "content-start",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-end")).toMatchInlineSnapshot(`
			{
			  "args": "content-end",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-between")).toMatchInlineSnapshot(`
			{
			  "args": "content-between",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-around")).toMatchInlineSnapshot(`
			{
			  "args": "content-around",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-evenly")).toMatchInlineSnapshot(`
			{
			  "args": "content-evenly",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-baseline")).toMatchInlineSnapshot(`
			{
			  "args": "content-baseline",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "content-stretch",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/align-items
	 */
	it("should parse align-items classes", () => {
		expect(parseClassName(config, "items-start")).toMatchInlineSnapshot(`
			{
			  "args": "items-start",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-end")).toMatchInlineSnapshot(`
			{
			  "args": "items-end",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "items-end-safe",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-center")).toMatchInlineSnapshot(`
			{
			  "args": "items-center",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-center-safe")).toMatchInlineSnapshot(`
			{
			  "args": "items-center-safe",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-baseline")).toMatchInlineSnapshot(`
			{
			  "args": "items-baseline",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-baseline-last")).toMatchInlineSnapshot(`
			{
			  "args": "items-baseline-last",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "items-stretch",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/align-self
	 */
	it("should parse align-self classes", () => {
		expect(parseClassName(config, "self-auto")).toMatchInlineSnapshot(`
			{
			  "args": "self-auto",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-start")).toMatchInlineSnapshot(`
			{
			  "args": "self-start",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-end")).toMatchInlineSnapshot(`
			{
			  "args": "self-end",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "self-end-safe",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-center")).toMatchInlineSnapshot(`
			{
			  "args": "self-center",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-center-safe")).toMatchInlineSnapshot(`
			{
			  "args": "self-center-safe",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "self-stretch",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-baseline")).toMatchInlineSnapshot(`
			{
			  "args": "self-baseline",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-baseline-last")).toMatchInlineSnapshot(`
			{
			  "args": "self-baseline-last",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/place-items
	 */
	it("should parse place-items classes", () => {
		expect(parseClassName(config, "place-items-start")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-start",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-end")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-end",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-end-safe",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-center")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-center",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "place-items-center-safe"),
		).toMatchInlineSnapshot(`
			{
			  "args": "place-items-center-safe",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-baseline")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-baseline",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "place-items-stretch",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/place-self
	 */
	it("should parse place-self classes", () => {
		expect(parseClassName(config, "place-self-auto")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-auto",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-start")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-start",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-end")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-end",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-end-safe")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-end-safe",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-center")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-center",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(
			parseClassName(config, "place-self-center-safe"),
		).toMatchInlineSnapshot(`
			{
			  "args": "place-self-center-safe",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-stretch")).toMatchInlineSnapshot(`
			{
			  "args": "place-self-stretch",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});
});

describe("`parseClassName` - Spacing", () => {
	let config: ResolvedConfig;

	beforeAll(() => {
		config = extendDefaultConfig({});
	});

	/**
	 * @see https://tailwindcss.com/docs/padding
	 */
	it("should parse padding classes", () => {
		expect(parseClassName(config, "p-0")).toMatchInlineSnapshot(`
			{
			  "args": "p-0",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "p-px")).toMatchInlineSnapshot(`
			{
			  "args": "p-px",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "p-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "p-[10px]",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-0")).toMatchInlineSnapshot(`
			{
			  "args": "px-0",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-px")).toMatchInlineSnapshot(`
			{
			  "args": "px-px",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "px-[10px]",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-0")).toMatchInlineSnapshot(`
			{
			  "args": "py-0",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-px")).toMatchInlineSnapshot(`
			{
			  "args": "py-px",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "py-[10px]",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-0")).toMatchInlineSnapshot(`
			{
			  "args": "ps-0",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-px")).toMatchInlineSnapshot(`
			{
			  "args": "ps-px",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "ps-[10px]",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-0")).toMatchInlineSnapshot(`
			{
			  "args": "pe-0",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-px")).toMatchInlineSnapshot(`
			{
			  "args": "pe-px",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "pe-[10px]",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-0")).toMatchInlineSnapshot(`
			{
			  "args": "pt-0",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-px")).toMatchInlineSnapshot(`
			{
			  "args": "pt-px",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "pt-[10px]",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-0")).toMatchInlineSnapshot(`
			{
			  "args": "pr-0",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-px")).toMatchInlineSnapshot(`
			{
			  "args": "pr-px",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "pr-[10px]",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-0")).toMatchInlineSnapshot(`
			{
			  "args": "pb-0",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-px")).toMatchInlineSnapshot(`
			{
			  "args": "pb-px",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "pb-[10px]",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-0")).toMatchInlineSnapshot(`
			{
			  "args": "pl-0",
			  "classGroup": "pl",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-px")).toMatchInlineSnapshot(`
			{
			  "args": "pl-px",
			  "classGroup": "pl",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "pl-[10px]",
			  "classGroup": "pl",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});

	/**
	 * @see https://tailwindcss.com/docs/margin
	 */
	it("should parse margin classes", () => {
		expect(parseClassName(config, "m-0")).toMatchInlineSnapshot(`
			{
			  "args": "m-0",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-m-0")).toMatchInlineSnapshot(`
			{
			  "args": "m-0",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-auto")).toMatchInlineSnapshot(`
			{
			  "args": "m-auto",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-px")).toMatchInlineSnapshot(`
			{
			  "args": "m-px",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-m-px")).toMatchInlineSnapshot(`
			{
			  "args": "m-px",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "m-[10px]",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-0")).toMatchInlineSnapshot(`
			{
			  "args": "mx-0",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mx-0")).toMatchInlineSnapshot(`
			{
			  "args": "mx-0",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-auto")).toMatchInlineSnapshot(`
			{
			  "args": "mx-auto",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-px")).toMatchInlineSnapshot(`
			{
			  "args": "mx-px",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mx-px")).toMatchInlineSnapshot(`
			{
			  "args": "mx-px",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "mx-[10px]",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-0")).toMatchInlineSnapshot(`
			{
			  "args": "my-0",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-my-0")).toMatchInlineSnapshot(`
			{
			  "args": "my-0",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-auto")).toMatchInlineSnapshot(`
			{
			  "args": "my-auto",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-px")).toMatchInlineSnapshot(`
			{
			  "args": "my-px",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-my-px")).toMatchInlineSnapshot(`
			{
			  "args": "my-px",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "my-[10px]",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-0")).toMatchInlineSnapshot(`
			{
			  "args": "ms-0",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ms-0")).toMatchInlineSnapshot(`
			{
			  "args": "ms-0",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-auto")).toMatchInlineSnapshot(`
			{
			  "args": "ms-auto",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-px")).toMatchInlineSnapshot(`
			{
			  "args": "ms-px",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ms-px")).toMatchInlineSnapshot(`
			{
			  "args": "ms-px",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "ms-[10px]",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-0")).toMatchInlineSnapshot(`
			{
			  "args": "me-0",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-me-0")).toMatchInlineSnapshot(`
			{
			  "args": "me-0",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-auto")).toMatchInlineSnapshot(`
			{
			  "args": "me-auto",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-px")).toMatchInlineSnapshot(`
			{
			  "args": "me-px",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-me-px")).toMatchInlineSnapshot(`
			{
			  "args": "me-px",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "me-[10px]",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-0")).toMatchInlineSnapshot(`
			{
			  "args": "mt-0",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mt-0")).toMatchInlineSnapshot(`
			{
			  "args": "mt-0",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-auto")).toMatchInlineSnapshot(`
			{
			  "args": "mt-auto",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-px")).toMatchInlineSnapshot(`
			{
			  "args": "mt-px",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mt-px")).toMatchInlineSnapshot(`
			{
			  "args": "mt-px",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "mt-[10px]",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-0")).toMatchInlineSnapshot(`
			{
			  "args": "mr-0",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mr-0")).toMatchInlineSnapshot(`
			{
			  "args": "mr-0",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-auto")).toMatchInlineSnapshot(`
			{
			  "args": "mr-auto",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-px")).toMatchInlineSnapshot(`
			{
			  "args": "mr-px",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mr-px")).toMatchInlineSnapshot(`
			{
			  "args": "mr-px",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "mr-[10px]",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-0")).toMatchInlineSnapshot(`
			{
			  "args": "mb-0",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mb-0")).toMatchInlineSnapshot(`
			{
			  "args": "mb-0",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-auto")).toMatchInlineSnapshot(`
			{
			  "args": "mb-auto",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-px")).toMatchInlineSnapshot(`
			{
			  "args": "mb-px",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mb-px")).toMatchInlineSnapshot(`
			{
			  "args": "mb-px",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "mb-[10px]",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-0")).toMatchInlineSnapshot(`
			{
			  "args": "ml-0",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ml-0")).toMatchInlineSnapshot(`
			{
			  "args": "ml-0",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-auto")).toMatchInlineSnapshot(`
			{
			  "args": "ml-auto",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-px")).toMatchInlineSnapshot(`
			{
			  "args": "ml-px",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ml-px")).toMatchInlineSnapshot(`
			{
			  "args": "ml-px",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "ml-[10px]",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-0")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-0",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-x-0")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-0",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-px")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-px",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-x-px")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-px",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-[10px]",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-0")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-0",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-y-0")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-0",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-px")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-px",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-y-px")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-px",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-[10px]",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-reverse")).toMatchInlineSnapshot(`
			{
			  "args": "space-x-reverse",
			  "classGroup": "space-x-reverse",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-reverse")).toMatchInlineSnapshot(`
			{
			  "args": "space-y-reverse",
			  "classGroup": "space-y-reverse",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});
});
