import tailwindcss from "@yorganci/eslint-plugin-tailwindcss";
import { Linter } from "eslint";
import path from "node:path"

const config = {
	files: ["**/*.{ts,tsx}"],
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
			stylesheet: path.resolve(import.meta.dirname, "./styles.css")
		},
	},
	rules: {
		"tailwindcss/classname-order": "error",
	},
} satisfies Linter.Config;

export default config;
