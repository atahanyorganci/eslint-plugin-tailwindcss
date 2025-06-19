import type { ResolvedConfig } from "./tailwind-merge.js";
import { beforeAll, describe, expect, it } from "vitest";
import { extendDefaultConfig, parseClassName } from "./tailwind-merge.js";

describe("`parseClassName`", () => {
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
});
