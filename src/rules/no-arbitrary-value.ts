import { ARBITRARY_VALUE_REGEX, createParseClassname } from "../tailwind-merge.js";
import { createVisitor, defineRule } from "../util.js";

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
			classLiteralVisitor: ({ value, report }) => {
				const parseClassname = createParseClassname();
				const classlist = value.split(/\s+/).filter(Boolean).map(cls => [cls, parseClassname(cls)] as const);

				for (const [classname, parsedClassname] of classlist) {
					if (!ARBITRARY_VALUE_REGEX.test(parsedClassname.baseClassName)) {
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
