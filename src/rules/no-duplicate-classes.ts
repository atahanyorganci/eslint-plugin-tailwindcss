import type { Rule } from "eslint";

const noDuplicateClasses = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow duplicate Tailwind CSS classnames.",
			recommended: true,
		},
		messages: {
			duplicateClassname: `Classname '{{classname}}' has duplicate(s).`,
		},
		fixable: "code",
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noDuplicateClasses;
