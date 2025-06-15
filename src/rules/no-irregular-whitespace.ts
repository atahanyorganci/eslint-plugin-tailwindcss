import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";
import { getSettings } from "../util.js";

const START = /^\s+/;
const CONSECUTIVE = /\s{2,}/;
const NON_SPACE_WHITESPACE = /[^\S ]/;
const END = /\s+$/;

const noIrregularWhitespace = {
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
		const { classRegex: classRegexString } = getSettings(context);
		const classRegex = new RegExp(classRegexString);

		return {
			JSXAttribute(node: JSXAttribute) {
				let nodeName: string;
				if (typeof node.name.name === "string") {
					nodeName = node.name.name;
				}
				else {
					nodeName = node.name.name.name;
				}

				if (
					classRegex.test(nodeName)
					&& node.value
					&& node.value.type === "Literal"
					&& typeof node.value.value === "string"
				) {
					const classValue = node.value.value;

					if (
						START.test(classValue)
						|| CONSECUTIVE.test(classValue)
						|| END.test(classValue)
						|| NON_SPACE_WHITESPACE.test(classValue)
					) {
						context.report({
							node,
							messageId: "irregularWhitespace",
							fix(fixer) {
								return fixer.replaceText(node.value, classValue.trim().replace(/\s+/g, " "));
							},
						});
					}
				}
			},
		};
	},
} satisfies Rule.RuleModule;

export default noIrregularWhitespace;
