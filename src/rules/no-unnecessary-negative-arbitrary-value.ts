import type { Rule } from "eslint";

const noUnnecessaryNegativeArbitraryValue = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallow unnecessary negative arbitrary values when alternative exists.",
			recommended: true,
		},
		messages: {
			unnecessaryNegativeArbitraryValue: `Arbitrary value classname '{{classname}}' should not start with a dash (-)`,
		},
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noUnnecessaryNegativeArbitraryValue;
