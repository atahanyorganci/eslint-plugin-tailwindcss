import type { Rule } from "eslint";

const noCustomClassname = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow custom classnames not included in Tailwind CSS.",
			recommended: false,
		},
		messages: {
			customClassname: `Classname '{{classname}}' is not a Tailwind CSS class!`,
		},
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noCustomClassname;
