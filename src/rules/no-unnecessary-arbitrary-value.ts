import { createParseClassname } from "../tailwind-merge.js";
import { createVisitor, defineRule, splitClassValueToParts } from "../util.js";

const REPLACERS = {
	w: {
		"50%": "1/2",
	},
} as Record<string, Record<string, string>>;

const noUnnecessaryArbitraryValue = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallow using arbitrary values in classnames when an equivalent preset exists.",
			recommended: true,
		},
		messages: {
			unnecessaryArbitraryValue: `The class with arbitrary value '{{classname}}' could be replaced by '{{replacement}}.'`,
		},
		fixable: "code",
	},
	create(context) {
		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const parseClassname = createParseClassname();
				const { classnames } = splitClassValueToParts(value);

				for (const classname of classnames) {
					const { baseClassName } = parseClassname(classname);
					const match = baseClassName.match(/(?<baseClass>\w+)-\[(?<value>.+)\]/);
					if (!match || !match.groups || !match.groups["baseClass"] || !match.groups["value"]) {
						continue;
					}
					const { baseClass, value } = match.groups;
					const replacers = REPLACERS[baseClass];
					if (!replacers) {
						continue;
					}
					const replacementValue = replacers[value];
					if (!replacementValue) {
						continue;
					}
					const replacement = classname.replace(/\[.+\]/, replacementValue);
					report({
						messageId: "unnecessaryArbitraryValue",
						data: {
							classname,
							replacement,
						},
					});
				}
			},
		});
	},
});

export default noUnnecessaryArbitraryValue;
