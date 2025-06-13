import type { ESLint, Linter } from "eslint";
import classnameOrder from "./rules/classname-order.js";
import noArbitraryValue from "./rules/no-arbitrary-value.js";
import noContradictingClassnames from "./rules/no-contradicting-classnames.js";
import noCustomClassname from "./rules/no-custom-classname.js";
import noDuplicateClassnames from "./rules/no-duplicate-classnames.js";
import noIrregularWhitespace from "./rules/no-irregular-whitespace.js";
import noUnnecessaryArbitraryValue from "./rules/no-unnecessary-arbitrary-value.js";
import noUnnecessaryNegativeArbitraryValue from "./rules/no-unnecessary-negative-arbitrary-value.js";
import shorthand from "./rules/shorthand.js";

const rules = {
	"tailwindcss/classname-order": "warn",
	"tailwindcss/no-arbitrary-value": "off",
	"tailwindcss/no-contradicting-classnames": "warn",
	"tailwindcss/no-custom-classname": "off",
	"tailwindcss/no-duplicate-classnames": "warn",
	"tailwindcss/no-irregular-whitespace": "warn",
	"tailwindcss/no-unnecessary-arbitrary-value": "warn",
	"tailwindcss/no-unnecessary-negative-arbitrary-value": "off",
	"tailwindcss/shorthand": "warn",
} satisfies Linter.RulesRecord;

const plugin = {
	meta: {
		name: "@yorganci/eslint-plugin-tailwindcss",
		version: "0.0.4",
		namespace: "eslint-plugin-tailwindcss",
	},
	rules: {
		"classname-order": classnameOrder,
		"no-arbitrary-value": noArbitraryValue,
		"no-contradicting-classnames": noContradictingClassnames,
		"no-custom-classname": noCustomClassname,
		"no-duplicate-classnames": noDuplicateClassnames,
		"no-irregular-whitespace": noIrregularWhitespace,
		"no-unnecessary-arbitrary-value": noUnnecessaryArbitraryValue,
		"no-unnecessary-negative-arbitrary-value": noUnnecessaryNegativeArbitraryValue,
		"shorthand": shorthand,
	},
	configs: {
		"recommended": {} as Linter.Config,
		"flat/recommended": [] as Linter.Config[],
	},
} satisfies ESLint.Plugin;

const recommended = {
	plugins: {
		tailwindcss: plugin,
	},
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	rules,
} satisfies Linter.Config;

const flatRecommended = [
	{
		name: "tailwindcss:base",
		plugins: {
			tailwindcss: plugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: "tailwindcss:rules",
		rules,
	},
] satisfies Linter.Config[];

Object.assign(plugin.configs, {
	"recommended": recommended,
	"flat/recommended": flatRecommended,
});

export default plugin;
