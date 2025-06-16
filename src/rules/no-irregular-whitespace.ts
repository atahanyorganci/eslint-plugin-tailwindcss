import { createVisitor, defineRule } from "../util.js";

const START = /^\s+/;
const CONSECUTIVE = /\s{2,}/;
const NON_SPACE_WHITESPACE = /[^\S ]/;
const END = /\s+$/;

const noIrregularWhitespace = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices",
			description: "Disallow redundant whitespace in CSS class name expressions.",
			recommended: true,
		},
		messages: {
			irregularWhitespace: "CSS class name expression contains redundant whitespace.",
		},
		fixable: "code",
	},
	create(context) {
		return createVisitor({
			context,
			classLiteralVisitor: ({ value, report }) => {
				if (
					START.test(value)
					|| CONSECUTIVE.test(value)
					|| END.test(value)
					|| NON_SPACE_WHITESPACE.test(value)
				) {
					report({
						messageId: "irregularWhitespace",
						replacementText: value.trim().replace(/\s+/g, " "),
					});
				}
			},
		});
	},
});

export default noIrregularWhitespace;
