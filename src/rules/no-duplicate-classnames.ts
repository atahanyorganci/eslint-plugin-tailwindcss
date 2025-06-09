import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";
import Counter from "../counter.js";
import { getSettings } from "../util.js";

const noDuplicateClassnames = {
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow duplicate Tailwind CSS classnames.",
			recommended: true,
		},
		messages: {
			duplicateClassname: `Classname '{{classname}}' has duplicate(s).`,
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
					const classes = node.value.value.split(" ").filter(Boolean);
					const uniqueClasses = new Counter(classes);
					if (classes.length === uniqueClasses.size) {
						return;
					}

					const unique = Array.from(uniqueClasses.entries().map(([classname]) => classname)).join(" ");

					for (const [classname, count] of uniqueClasses.entries()) {
						if (count === 1) {
							continue;
						}
						context.report({
							node,
							messageId: "duplicateClassname",
							data: {
								classname,
							},
							fix(fixer) {
								return fixer.replaceText(node.value, unique);
							},
						});
					}
				}
			},
		};
	},
} satisfies Rule.RuleModule;

export default noDuplicateClassnames;
