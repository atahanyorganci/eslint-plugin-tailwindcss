import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";
import { reorderClasses } from "../prettier/index.js";

function arraysEqual<T>(a: T[], b: T[]): boolean {
	return a.length === b.length && a.every((value, i) => value === b[i]);
}

const classNamesOrder = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Enforce consistent order of the TailwindCSS classes.",
			recommended: true,
		},
		messages: {
			invalidOrder: "TailwindCSS classes should be sorted by category",
		},
		fixable: "code",
	},
	create(context) {
		return {
			JSXAttribute(node: JSXAttribute) {
				const classRegex = /^class(?:Name)?$/;
				let nodeName: string;
				if (typeof node.name.name === "string") {
					nodeName = node.name.name;
				}
				else {
					nodeName = node.name.name.name;
				}

				// Check if this is a className attribute
				if (
					classRegex.test(nodeName)
					&& node.value
					&& node.value.type === "Literal"
					&& typeof node.value.value === "string"
				) {
					const classes = node.value.value.split(" ").filter(Boolean);
					const orderedClasses = reorderClasses({
						stylesheet: "src/styles/globals.css",
						classes,
					});

					if (!arraysEqual(classes, orderedClasses)) {
						context.report({
							node,
							messageId: "invalidOrder",
							fix(fixer) {
								return fixer.replaceText(node.value, `"${orderedClasses.join(" ")}"`);
							},
						});
					}
				}
			},
		};
	},
} satisfies Rule.RuleModule;

export default classNamesOrder;
