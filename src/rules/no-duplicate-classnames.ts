import Counter from "../counter.js";
import { createVisitor, defineRule } from "../util.js";

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
				const classes = value.split(" ").filter(Boolean);
				const uniqueClasses = new Counter(classes);
				if (classes.length === uniqueClasses.size) {
					return;
				}

				const unique = Array.from(uniqueClasses.entries().map(([classname]) => classname)).join(" ");

				for (const [classname, count] of uniqueClasses.entries()) {
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
