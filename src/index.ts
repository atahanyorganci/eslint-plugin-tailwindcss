import type { ESLint } from "eslint";
import classnameOrder from "./rules/classname-order.js";
import noArbitraryValue from "./rules/no-arbitrary-value.js";
import noContradictingClassnames from "./rules/no-contradicting-classnames.js";
import noCustomClassname from "./rules/no-custom-classname.js";
import noDuplicateClasses from "./rules/no-duplicate-classes.js";
import noIrregularWhitespace from "./rules/no-irregular-whitespace.js";
import noUnnecessaryArbitraryValue from "./rules/no-unnecessary-arbitrary-value.js";
import noUnnecessaryNegativeArbitraryValue from "./rules/no-unnecessary-negative-arbitrary-value.js";
import shorthand from "./rules/shorthand.js";

const plugin = {
	meta: {
		name: "@yorganci/eslint-plugin-tailwindcss",
		version: "0.0.3",
		namespace: "eslint-plugin-tailwindcss",
	},
	rules: {
		"classname-order": classnameOrder,
		"no-arbitrary-value": noArbitraryValue,
		"no-contradicting-classnames": noContradictingClassnames,
		"no-custom-classname": noCustomClassname,
		"no-duplicate-classnames": noDuplicateClasses,
		"no-irregular-whitespace": noIrregularWhitespace,
		"no-unnecessary-arbitrary-value": noUnnecessaryArbitraryValue,
		"no-unnecessary-negative-arbitrary-value": noUnnecessaryNegativeArbitraryValue,
		"shorthand": shorthand,
	},
} satisfies ESLint.Plugin;

export default plugin;
