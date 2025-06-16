import type { JSXAttribute } from "estree-jsx";
import { createClassGroupUtils, createParseClassname } from "../tailwind-merge.js";
import { defineRule, getSettings } from "../util.js";

const noCustomClassname = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow custom classnames not included in Tailwind CSS.",
			recommended: false,
		},
		messages: {
			customClassname: `Classname '{{classname}}' is not a Tailwind CSS class!`,
		},
	},
	create(context) {
		const { classRegex: classRegexString } = getSettings(context);
		const classRegex = new RegExp(classRegexString);
		const parseClassname = createParseClassname();
		const { getClassGroupId } = createClassGroupUtils();

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
					const classnames = node.value.value.split(/\s+/).filter(Boolean);

					for (const classname of classnames) {
						const { baseClassName, maybePostfixModifierPosition } = parseClassname(classname);

						const hasPostfixModifier = !!maybePostfixModifierPosition;
						const classWithoutModifier = hasPostfixModifier
							? baseClassName.substring(0, maybePostfixModifierPosition)
							: baseClassName;
						let classGroupId = getClassGroupId(classWithoutModifier);
						if (classGroupId) {
							continue;
						}
						classGroupId = getClassGroupId(baseClassName);
						if (classGroupId) {
							continue;
						}

						context.report({
							node,
							messageId: "customClassname",
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

export default noCustomClassname;
