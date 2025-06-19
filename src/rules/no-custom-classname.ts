import { getTailwindPrefix } from "../prettier/index.js";
import { extendDefaultConfig, parseClassName } from "../tailwind-merge.js";
import { createVisitor, defineRule, getSettings, splitClassValueToParts } from "../util.js";

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
	create(context) {
		const { stylesheet } = getSettings(context);
		const prefix = getTailwindPrefix({ stylesheet });
		const config = extendDefaultConfig({ prefix });

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
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
	},
});

export default noCustomClassname;
