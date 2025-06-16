import type { JSXAttribute } from "estree-jsx";
import { ARBITRARY_VALUE_REGEX, createParseClassname } from "../tailwind-merge.js";
import { defineRule, getSettings } from "../util.js";

const noArbitraryValue = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow using arbitrary values in classnames.",
			recommended: false,
		},
		messages: {
			arbitraryValue: `Class '{{classname}}' has arbitrary value.`,
		},
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

				// Check if this is a className attribute
				if (
					classRegex.test(nodeName)
					&& node.value
					&& node.value.type === "Literal"
					&& typeof node.value.value === "string"
				) {
					const parseClassname = createParseClassname();
					const classlist = node.value.value.split(/\s+/).filter(Boolean).map(cls => [cls, parseClassname(cls)] as const);

					for (const [classname, parsedClassname] of classlist) {
						if (!ARBITRARY_VALUE_REGEX.test(parsedClassname.baseClassName)) {
							continue;
						}
						context.report({
							node,
							messageId: "arbitraryValue",
							data: {
								classname,
							},
						});
					}
				}
			},
		};
	},
});

export default noArbitraryValue;
