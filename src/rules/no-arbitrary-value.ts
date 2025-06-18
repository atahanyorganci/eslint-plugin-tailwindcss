import { ARBITRARY_VALUE_REGEX, createParseClassname } from "../tailwind-merge.js";
import { createVisitor, defineRule, splitClassValueToParts } from "../util.js";

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
		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const parseClassname = createParseClassname();
				const { classnames } = splitClassValueToParts(value);

				for (const classname of classnames) {
					const { baseClassName } = parseClassname(classname);
					if (!ARBITRARY_VALUE_REGEX.test(baseClassName)) {
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
