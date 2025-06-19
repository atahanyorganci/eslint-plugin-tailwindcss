import { parseClassName } from "../tailwind-merge.js";
import { defineRule, splitClassValueToParts } from "../util.js";

const noCustomClassname = defineRule({
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
	visit({ config, value, report }) {
		const { classnames } = splitClassValueToParts(value);

		for (const classname of classnames) {
			const { isExternal } = parseClassName(config, classname);
			if (!isExternal) {
				continue;
			}
			report({
				messageId: "customClassname",
				data: {
					classname,
				},
			});
		}
	},
});

export default noCustomClassname;
