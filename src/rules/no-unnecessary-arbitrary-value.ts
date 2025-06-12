import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";
import { createParseClassname } from "../tailwind-merge.js";
import { getSettings } from "../util.js";

const REPLACERS = {
	w: {
		"50%": "1/2",
	},
} as Record<string, Record<string, string>>;

const noUnnecessaryArbitraryValue = {
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
		const { classRegex: classRegexString } = getSettings(context);
		const classRegex = new RegExp(classRegexString);
		const parseClassname = createParseClassname();

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
					const classlist = node.value.value.split(/\s+/).filter(Boolean).map(cls => [cls, parseClassname(cls)] as const);

					for (const [classname, { baseClassName }] of classlist) {
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
						context.report({
							node,
							messageId: "unnecessaryArbitraryValue",
							data: {
								classname,
								replacement,
							},
						});
					}
				}
			},
		};
	},
} satisfies Rule.RuleModule;

export default noUnnecessaryArbitraryValue;
