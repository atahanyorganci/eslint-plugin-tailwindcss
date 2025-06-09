import type { Rule } from "eslint";

const shorthand = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Enforce usage of shorthand Tailwind CSS classname.",
			recommended: true,
		},
		messages: {
			shorthandCandidate: `Classnames '{{classnames}}' could be replaced by the '{{shorthand}}' shorthand!`,
		},
		fixable: "code",
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default shorthand;
