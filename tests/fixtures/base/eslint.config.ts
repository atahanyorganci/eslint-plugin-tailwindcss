import type { Linter } from "eslint";
import path from "node:path";
import tailwindcss from "@yorganci/eslint-plugin-tailwindcss";

const config = {
	files: ["**/*.{js,jsx,ts,tsx}"],
	languageOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	plugins: {
		tailwindcss,
	},
	settings: {
		tailwindcss: {
			stylesheet: path.resolve(import.meta.dirname, "./styles.css"),
		},
	},
} satisfies Linter.Config;

export default config;
