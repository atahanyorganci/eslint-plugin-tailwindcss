import type { Rule } from "eslint";

const noNegativeArbitraryValues = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallows negative arbitrary values when alternative exists.",
			recommended: true,
		},
		messages: {
			negativeArbitraryValue: `Arbitrary value classname '{{classname}}' should not start with a dash (-)`,
		},
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noNegativeArbitraryValues;
