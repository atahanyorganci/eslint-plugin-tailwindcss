import type { Rule } from "eslint";

const noUnnecessaryArbitraryValue = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallow using arbitrary values in classnames when an equivalent preset exists.",
			recommended: true,
		},
		messages: {
			unnecessaryArbitraryValue: `The class with arbitrary value '{{classname}}' could be replaced by '{{presets}}.'`,
		},
		fixable: "code",
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noUnnecessaryArbitraryValue;
