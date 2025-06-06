import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";
import { getTailwindConfig } from "../prettier/config.js";

function arraysEqual<T>(a: T[], b: T[]): boolean {
	return a.length === b.length && a.every((val, index) => val === b[index]);
}

const tailwindConfig = await getTailwindConfig({
	stylesheet: "src/styles/globals.css",
});

function bigSign(bigIntValue: bigint) {
	return Number(bigIntValue > 0n) - Number(bigIntValue < 0n);
}

function reorderClasses(classList: string[]) {
	const orderedClasses = tailwindConfig.getClassOrder(classList);

	return orderedClasses.sort(([nameA, a], [nameZ, z]) => {
		// Move `...` to the end of the list
		if (nameA === "..." || nameA === "…")
			return 1;
		if (nameZ === "..." || nameZ === "…")
			return -1;

		if (a === z)
			return 0;
		if (a === null)
			return -1;
		if (z === null)
			return 1;
		return bigSign(a - z);
	}).map(([className]) => className);
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
					const orderedClasses = reorderClasses(classes);

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
