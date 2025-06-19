import { reorderClasses } from "../prettier/index.js";
import {
	arrayEquals,
	defineRule,
	joinClassValueParts,
	splitClassValueToParts,
} from "../util.js";

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
	visit({ value, report, settings: { stylesheet } }) {
		const { classnames, leading, whitespaces } = splitClassValueToParts(value);
		if (classnames.length === 0) {
			return;
		}

		const orderedClasses = reorderClasses({
			stylesheet,
			classes: classnames,
		});

		if (!arrayEquals(classnames, orderedClasses)) {
			report({
				messageId: "invalidOrder",
				fix: {
					type: "value",
					value: joinClassValueParts({ leading, classnames: orderedClasses, whitespaces }),
				},
			});
		}
	},
});

export default classnameOrder;
