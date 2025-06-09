import type { Rule } from "eslint";

const noArbitraryValue = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow using arbitrary values in classnames.",
			recommended: false,
		},
		messages: {
			arbitraryValue: `Arbitrary value detected in '{{classname}}'`,
		},
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noArbitraryValue;
