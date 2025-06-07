import type { ESLint } from "eslint";
import classNameOrder from "./rules/classname-order.js";
import noNegativeArbitraryValues from "./rules/no-negative-arbitrary-values.js";

const plugin = {
	meta: {
		name: "@yorganci/eslint-plugin-tailwindcss",
		version: "0.0.0",
		namespace: "eslint-plugin-tailwindcss",
	},
	rules: {
		"classname-order": classNameOrder,
		"no-negative-arbitrary-value": noNegativeArbitraryValues,
	},
} satisfies ESLint.Plugin;

export default plugin;
