import type { ESLint } from "eslint";
import classNameOrder from "./rules/classname-order.js";

const plugin = {
	meta: {
		name: "@yorganci/eslint-plugin-tailwindcss",
		version: "0.0.0",
		namespace: "eslint-plugin-tailwindcss",
	},
	rules: {
		"classname-order": classNameOrder,
	},
} satisfies ESLint.Plugin;

export default plugin;
