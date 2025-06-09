import type { Rule } from "eslint";

const noIrregularWhitespace = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow redundant whitespace in CSS class name expressions.",
			recommended: true,
		},
		fixable: "code",
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noIrregularWhitespace;
