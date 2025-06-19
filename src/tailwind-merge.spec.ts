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
			  "baseClass": "aspect-square",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-video")).toMatchInlineSnapshot(`
			{
			  "baseClass": "aspect-video",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "aspect-1",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-4/3")).toMatchInlineSnapshot(`
			{
			  "baseClass": "aspect-4",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-16/9")).toMatchInlineSnapshot(`
			{
			  "baseClass": "aspect-16",
			  "classGroup": "aspect",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "aspect-[1/2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "aspect-[1/2]",
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
			  "baseClass": "columns-1",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-2",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-3",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-4")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-4",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3xs")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-3xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2xs")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-2xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-xs")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-xs",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-sm")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-sm",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-md")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-md",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-lg")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-lg",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-2xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-2xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-3xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-3xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-4xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-4xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-5xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-5xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-6xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-6xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-7xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-7xl",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-auto",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-[3]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-[3]",
			  "classGroup": "columns",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "columns-[var(--custom-columns)]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "columns-[var(--custom-columns)]",
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
			  "baseClass": "break-after-auto",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-avoid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-avoid",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-all")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-all",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-avoid-page")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-avoid-page",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-page")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-page",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-left")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-left",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-right",
			  "classGroup": "break-after",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-after-column")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-after-column",
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
			  "baseClass": "break-before-auto",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-avoid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-avoid",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-all")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-all",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-avoid-page")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-avoid-page",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-page")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-page",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-left")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-left",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-right",
			  "classGroup": "break-before",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-before-column")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-before-column",
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
			  "baseClass": "break-inside-auto",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-inside-avoid",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid-page")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-inside-avoid-page",
			  "classGroup": "break-inside",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "break-inside-avoid-column")).toMatchInlineSnapshot(`
			{
			  "baseClass": "break-inside-avoid-column",
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
			  "baseClass": "box-decoration-clone",
			  "classGroup": "box-decoration",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "box-decoration-slice")).toMatchInlineSnapshot(`
			{
			  "baseClass": "box-decoration-slice",
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
			  "baseClass": "box-border",
			  "classGroup": "box",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "box-content")).toMatchInlineSnapshot(`
			{
			  "baseClass": "box-content",
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
			  "baseClass": "block",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inline",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-block")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inline-block",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flow-root")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flow-root",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-flex")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inline-flex",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-grid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inline-grid",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "contents")).toMatchInlineSnapshot(`
			{
			  "baseClass": "contents",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inline-table")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inline-table",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-caption")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-caption",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-cell")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-cell",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-column")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-column",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-column-group")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-column-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-footer-group")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-footer-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-header-group")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-header-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-row-group")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-row-group",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "table-row")).toMatchInlineSnapshot(`
			{
			  "baseClass": "table-row",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "list-item")).toMatchInlineSnapshot(`
			{
			  "baseClass": "list-item",
			  "classGroup": "display",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "hidden")).toMatchInlineSnapshot(`
			{
			  "baseClass": "hidden",
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
			  "baseClass": "float-right",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-left")).toMatchInlineSnapshot(`
			{
			  "baseClass": "float-left",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "float-start",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "float-end",
			  "classGroup": "float",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "float-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "float-none",
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
			  "baseClass": "clear-left",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "clear-right",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-both")).toMatchInlineSnapshot(`
			{
			  "baseClass": "clear-both",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "clear-start",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "clear-end",
			  "classGroup": "clear",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "clear-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "clear-none",
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
			  "baseClass": "isolate",
			  "classGroup": "isolation",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "isolation-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "isolation-auto",
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
			  "baseClass": "object-contain",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-cover")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-cover",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-fill")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-fill",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-none",
			  "classGroup": "object-fit",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-scale-down")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-scale-down",
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
			  "baseClass": "object-top-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-top")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-top",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-top-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-top-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-left")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-center",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom-left")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-bottom-left",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-bottom",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-bottom-right")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-bottom-right",
			  "classGroup": "object-position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "object-[25%_75%]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "object-[25%_75%]",
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
			  "baseClass": "overflow-auto",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-hidden")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-hidden",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-clip")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-clip",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-visible")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-visible",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-scroll")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-scroll",
			  "classGroup": "overflow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-x-auto",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-y-auto",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-hidden")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-x-hidden",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-hidden")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-y-hidden",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-clip")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-x-clip",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-clip")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-y-clip",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-visible")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-x-visible",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-visible")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-y-visible",
			  "classGroup": "overflow-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-x-scroll")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-x-scroll",
			  "classGroup": "overflow-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overflow-y-scroll")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overflow-y-scroll",
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
			  "baseClass": "overscroll-auto",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-contain")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-contain",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-none",
			  "classGroup": "overscroll",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-x-auto",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-contain")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-x-contain",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-x-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-x-none",
			  "classGroup": "overscroll-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-y-auto",
			  "classGroup": "overscroll-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-contain")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-y-contain",
			  "classGroup": "overscroll-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "overscroll-y-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "overscroll-y-none",
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
			  "baseClass": "static",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "fixed")).toMatchInlineSnapshot(`
			{
			  "baseClass": "fixed",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "absolute")).toMatchInlineSnapshot(`
			{
			  "baseClass": "absolute",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "relative")).toMatchInlineSnapshot(`
			{
			  "baseClass": "relative",
			  "classGroup": "position",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "sticky")).toMatchInlineSnapshot(`
			{
			  "baseClass": "sticky",
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
			  "baseClass": "inset-0",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-0",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-1",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-1",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-px",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-px",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-full",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-full",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-auto",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-[10px]",
			  "classGroup": "inset",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-0",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-x-0",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-1",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-x-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-x-1",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-x-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-px",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-x-px",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-full",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-x-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-x-full",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-auto",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-x-[10px]",
			  "classGroup": "inset-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-0",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-y-0",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-1",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-inset-y-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-y-1",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "inset-y-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-px",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-y-px",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-full",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-inset-y-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-inset-y-full",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-auto",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "inset-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "inset-y-[10px]",
			  "classGroup": "inset-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-0",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-start-0",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-1",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-start-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-start-1",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "start-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-px",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-start-px",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-full",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-start-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-start-full",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-auto",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "start-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "start-[10px]",
			  "classGroup": "start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-0",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-end-0",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-1",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-end-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-end-1",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "end-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-px",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-end-px",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-full",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-end-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-end-full",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-auto",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "end-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "end-[10px]",
			  "classGroup": "end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-0",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-top-0",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-1",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-top-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-top-1",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "top-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-px",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-top-px",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-full",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-top-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-top-full",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-auto",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "top-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "top-[10px]",
			  "classGroup": "top",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-0",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-right-0",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-1",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-right-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-right-1",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "right-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-px",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-right-px",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-full",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-right-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-right-full",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-auto",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "right-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "right-[10px]",
			  "classGroup": "right",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-0",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-bottom-0",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-1",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-bottom-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-bottom-1",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "bottom-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-px",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-bottom-px",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-full",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-bottom-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-bottom-full",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-auto",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "bottom-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "bottom-[10px]",
			  "classGroup": "bottom",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-0",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-left-0",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-1",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "-left-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-left-1",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "left-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-px",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-left-px",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-full",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-left-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-left-full",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-auto",
			  "classGroup": "left",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "left-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "left-[10px]",
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
			  "baseClass": "visible",
			  "classGroup": "visibility",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "invisible")).toMatchInlineSnapshot(`
			{
			  "baseClass": "invisible",
			  "classGroup": "visibility",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "collapse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "collapse",
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
			  "baseClass": "z-0",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-10")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-10",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-20")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-20",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-30")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-30",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-40")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-40",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-50")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-50",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-auto",
			  "classGroup": "z",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "z-[100]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "z-[100]",
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
			  "baseClass": "basis-0",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-1/2")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-1",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": "2",
			}
		`);
		expect(parseClassName(config, "basis-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-full",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-auto",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-3xs")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-3xs",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-2xl")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-2xl",
			  "classGroup": "basis",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "basis-[100px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "basis-[100px]",
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
			  "baseClass": "flex-row",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-row-reverse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-row-reverse",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-col")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-col",
			  "classGroup": "flex-direction",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-col-reverse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-col-reverse",
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
			  "baseClass": "flex-nowrap",
			  "classGroup": "flex-wrap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-wrap")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-wrap",
			  "classGroup": "flex-wrap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-wrap-reverse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-wrap-reverse",
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
			  "baseClass": "flex-1",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-auto",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-initial")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-initial",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-none",
			  "classGroup": "flex",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "flex-[1_0_auto]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "flex-[1_0_auto]",
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
			  "baseClass": "grow",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grow-0",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-3")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grow-3",
			  "classGroup": "grow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grow-[25vw]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grow-[25vw]",
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
			  "baseClass": "shrink",
			  "classGroup": "shrink",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "shrink-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "shrink-0",
			  "classGroup": "shrink",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "shrink-[calc(100vw-var(--sidebar))]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "shrink-[calc(100vw-var(--sidebar))]",
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
			  "baseClass": "grid-cols-1",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-cols-none",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-subgrid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-cols-subgrid",
			  "classGroup": "grid-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-cols-[200px_minmax(900px,_1fr)_100px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-cols-[200px_minmax(900px,_1fr)_100px]",
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
			  "baseClass": "col-span-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-span-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-span-full",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-span-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-span-[2]",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-start-1",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-start-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-col-start-1",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-start-auto",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-start-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-start-[2]",
			  "classGroup": "col-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-end-1",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-end-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-col-end-1",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-end-auto",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-end-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-end-[2]",
			  "classGroup": "col-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-auto",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-col-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-col-1",
			  "classGroup": "col-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "col-[1_/_span_3]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "col-[1_/_span_3]",
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
			  "baseClass": "grid-rows-1",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-rows-none")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-rows-none",
			  "classGroup": "grid-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-rows-subgrid")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-rows-subgrid",
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
			  "baseClass": "grid-rows-[200px_minmax(900px,1fr)_100px]",
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
			  "baseClass": "row-span-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-span-full")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-span-full",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-span-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-span-[2]",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-start-1",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-start-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-row-start-1",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-start-auto",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-start-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-start-[2]",
			  "classGroup": "row-start",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-end-1",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-end-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-row-end-1",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-end-auto",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-end-[2]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-end-[2]",
			  "classGroup": "row-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-auto",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-row-1")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-row-1",
			  "classGroup": "row-start-end",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "row-[span_16_/_span_16]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "row-[span_16_/_span_16]",
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
			  "baseClass": "grid-flow-row",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-col")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-flow-col",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-dense")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-flow-dense",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-row-dense")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-flow-row-dense",
			  "classGroup": "grid-flow",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "grid-flow-col-dense")).toMatchInlineSnapshot(`
			{
			  "baseClass": "grid-flow-col-dense",
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
			  "baseClass": "auto-cols-auto",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-min")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-cols-min",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-max")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-cols-max",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-fr")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-cols-fr",
			  "classGroup": "auto-cols",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-cols-[100px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-cols-[100px]",
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
			  "baseClass": "auto-rows-auto",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-min")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-rows-min",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-max")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-rows-max",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-fr")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-rows-fr",
			  "classGroup": "auto-rows",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "auto-rows-[100px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "auto-rows-[100px]",
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
			  "baseClass": "gap-0",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-px",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-[10px]",
			  "classGroup": "gap",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-x-0",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-x-px",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-x-[10px]",
			  "classGroup": "gap-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-y-0",
			  "classGroup": "gap-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-y-px",
			  "classGroup": "gap-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "gap-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "gap-y-[10px]",
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
			  "baseClass": "justify-start",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-end",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-end-safe",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-center",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-center-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-center-safe",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-between")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-between",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-around")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-around",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-evenly")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-evenly",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-stretch",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-baseline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-baseline",
			  "classGroup": "justify-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-normal")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-normal",
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
			  "baseClass": "justify-items-start",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-items-end",
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
			  "baseClass": "justify-items-end-safe",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-items-center",
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
			  "baseClass": "justify-items-center-safe",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-items-stretch",
			  "classGroup": "justify-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-items-normal")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-items-normal",
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
			  "baseClass": "justify-self-auto",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-self-start",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-self-center",
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
			  "baseClass": "justify-self-center-safe",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-self-end",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-self-end-safe",
			  "classGroup": "justify-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "justify-self-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "justify-self-stretch",
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
			  "baseClass": "content-normal",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-center",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-start",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-end",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-between")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-between",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-around")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-around",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-evenly")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-evenly",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-baseline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-baseline",
			  "classGroup": "align-content",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "content-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "content-stretch",
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
			  "baseClass": "items-start",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-end",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-end-safe",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-center",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-center-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-center-safe",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-baseline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-baseline",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-baseline-last")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-baseline-last",
			  "classGroup": "align-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "items-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "items-stretch",
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
			  "baseClass": "self-auto",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-start",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-end",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-end-safe",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-center",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-center-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-center-safe",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-stretch",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-baseline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-baseline",
			  "classGroup": "align-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "self-baseline-last")).toMatchInlineSnapshot(`
			{
			  "baseClass": "self-baseline-last",
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
			  "baseClass": "place-items-start",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-items-end",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-items-end-safe",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-items-center",
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
			  "baseClass": "place-items-center-safe",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-baseline")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-items-baseline",
			  "classGroup": "place-items",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-items-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-items-stretch",
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
			  "baseClass": "place-self-auto",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-start")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-self-start",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-end")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-self-end",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-end-safe")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-self-end-safe",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-center")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-self-center",
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
			  "baseClass": "place-self-center-safe",
			  "classGroup": "place-self",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "place-self-stretch")).toMatchInlineSnapshot(`
			{
			  "baseClass": "place-self-stretch",
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
			  "baseClass": "p-0",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "p-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "p-px",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "p-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "p-[10px]",
			  "classGroup": "p",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "px-0",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "px-px",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "px-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "px-[10px]",
			  "classGroup": "px",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "py-0",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "py-px",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "py-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "py-[10px]",
			  "classGroup": "py",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ps-0",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ps-px",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ps-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ps-[10px]",
			  "classGroup": "ps",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pe-0",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pe-px",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pe-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pe-[10px]",
			  "classGroup": "pe",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pt-0",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pt-px",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pt-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pt-[10px]",
			  "classGroup": "pt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pr-0",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pr-px",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pr-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pr-[10px]",
			  "classGroup": "pr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pb-0",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pb-px",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pb-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pb-[10px]",
			  "classGroup": "pb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pl-0",
			  "classGroup": "pl",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pl-px",
			  "classGroup": "pl",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "pl-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "pl-[10px]",
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
			  "baseClass": "m-0",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-m-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-m-0",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "m-auto",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "m-px",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-m-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-m-px",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "m-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "m-[10px]",
			  "classGroup": "m",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mx-0",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mx-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mx-0",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mx-auto",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mx-px",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mx-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mx-px",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mx-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mx-[10px]",
			  "classGroup": "mx",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "my-0",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-my-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-my-0",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "my-auto",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "my-px",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-my-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-my-px",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "my-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "my-[10px]",
			  "classGroup": "my",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ms-0",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ms-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-ms-0",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ms-auto",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ms-px",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ms-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-ms-px",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ms-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ms-[10px]",
			  "classGroup": "ms",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "me-0",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-me-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-me-0",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "me-auto",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "me-px",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-me-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-me-px",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "me-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "me-[10px]",
			  "classGroup": "me",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mt-0",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mt-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mt-0",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mt-auto",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mt-px",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mt-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mt-px",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mt-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mt-[10px]",
			  "classGroup": "mt",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mr-0",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mr-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mr-0",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mr-auto",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mr-px",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mr-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mr-px",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mr-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mr-[10px]",
			  "classGroup": "mr",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mb-0",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mb-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mb-0",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mb-auto",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mb-px",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-mb-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-mb-px",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "mb-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "mb-[10px]",
			  "classGroup": "mb",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ml-0",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ml-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-ml-0",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-auto")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ml-auto",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ml-px",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-ml-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-ml-px",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "ml-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "ml-[10px]",
			  "classGroup": "ml",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-x-0",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-x-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-space-x-0",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-x-px",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-x-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-space-x-px",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-x-[10px]",
			  "classGroup": "space-x",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-y-0",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-y-0")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-space-y-0",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-y-px",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "-space-y-px")).toMatchInlineSnapshot(`
			{
			  "baseClass": "-space-y-px",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-[10px]")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-y-[10px]",
			  "classGroup": "space-y",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-x-reverse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-x-reverse",
			  "classGroup": "space-x-reverse",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
		expect(parseClassName(config, "space-y-reverse")).toMatchInlineSnapshot(`
			{
			  "baseClass": "space-y-reverse",
			  "classGroup": "space-y-reverse",
			  "hasImportantModifier": false,
			  "isExternal": false,
			  "modifiers": [],
			  "postfixModifier": undefined,
			}
		`);
	});
});
