import { reorderClasses } from "../prettier/index.js";
import { createVisitor, defineRule, getSettings } from "../util.js";

function arraysEqual<T>(a: T[], b: T[]): boolean {
	return a.length === b.length && a.every((value, i) => value === b[i]);
}

const classnameOrder = defineRule({
	meta: {
		type: "problem",
		docs: {
			category: "Possible Errors",
			description: "Enforce consistent order of the TailwindCSS classes.",
			recommended: true,
		},
		messages: {
			invalidOrder: "TailwindCSS classes should be sorted by category",
		},
		fixable: "code",
	},
	create(context) {
		const { stylesheet } = getSettings(context);

		return createVisitor({
			context,
			classLiteralVisitor: ({ value, report }) => {
				const classes = value.split(" ").filter(Boolean);
				const orderedClasses = reorderClasses({
					stylesheet,
					classes,
				});

				if (!arraysEqual(classes, orderedClasses)) {
					report({
						messageId: "invalidOrder",
						replacementText: orderedClasses.join(" "),
					});
				}
			},
		});
	},
});

export default classnameOrder;
