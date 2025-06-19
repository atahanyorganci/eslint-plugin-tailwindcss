import { createClassGroupUtils, parseClassName } from "../tailwind-merge.js";
import { createVisitor, defineRule, splitClassValueToParts } from "../util.js";

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
		const { getClassGroupId } = createClassGroupUtils();

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { classnames } = splitClassValueToParts(value);

				for (const classname of classnames) {
					const { baseClassName, maybePostfixModifierPosition } = parseClassName(classname);

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

					report({
						messageId: "customClassname",
						data: {
							classname,
						},
					});
				}
			},
		});
	},
});

export default noCustomClassname;
