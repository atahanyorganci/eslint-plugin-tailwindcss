import Counter from "../counter.js";
import { createVisitor, defineRule, splitClassValueToParts } from "../util.js";

const noDuplicateClassnames = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallow duplicate Tailwind CSS classnames.",
			recommended: true,
		},
		messages: {
			duplicateClassname: `Classname '{{classname}}' has duplicate(s).`,
		},
		fixable: "code",
	},
	create(context) {
		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { classnames } = splitClassValueToParts(value);
				const classnameCounts = new Counter(classnames);
				if (classnames.length === classnameCounts.size) {
					return;
				}

				const unique = Array.from(classnameCounts.keys()).join(" ");
				for (const [classname, count] of classnameCounts.entries()) {
					if (count === 1) {
						continue;
					}
					report({
						messageId: "duplicateClassname",
						data: {
							classname,
						},
						fix: {
							type: "value",
							value: unique,
						},
					});
				}
			},
		});
	},
});

export default noDuplicateClassnames;
