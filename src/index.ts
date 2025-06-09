import type { ESLint } from "eslint";
import classnameOrder from "./rules/classname-order.js";

const plugin = {
	meta: {
		name: "@yorganci/eslint-plugin-tailwindcss",
		version: "0.0.2",
		namespace: "eslint-plugin-tailwindcss",
	},
	rules: {
		"classname-order": classnameOrder,
	},
} satisfies ESLint.Plugin;

export default plugin;
