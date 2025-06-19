import { getTailwindPrefix } from "../prettier/index.js";
import { ARBITRARY_VALUE_REGEX, extendDefaultConfig, parseClassName } from "../tailwind-merge.js";
import { createVisitor, defineRule, getSettings, splitClassValueToParts } from "../util.js";

const noArbitraryValue = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow using arbitrary values in classnames.",
			recommended: false,
		},
		messages: {
			arbitraryValue: `Class '{{classname}}' has arbitrary value.`,
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
					const parsed = parseClassName(config, classname);
					if (parsed.isExternal || !ARBITRARY_VALUE_REGEX.test(parsed.args)) {
						continue;
					}
					report({
						messageId: "arbitraryValue",
						data: {
							classname,
						},
					});
				}
			},
		});
	},
});

export default noArbitraryValue;
