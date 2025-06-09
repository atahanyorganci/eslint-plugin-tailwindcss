import type { Rule } from "eslint";

const noContradictingClassnames = {
	meta: {
		type: "problem",
		docs: {
			category: "Possible Errors",
			description: "Disallow contradicting Tailwind CSS classnames (e.g. \"w-3 w-5\")",
			recommended: true,
		},
		messages: {
			conflictingClassnames: `Classnames {{classnames}} are conflicting!`,
		},
	},
	create() {
		return {};
	},
} satisfies Rule.RuleModule;

export default noContradictingClassnames;
