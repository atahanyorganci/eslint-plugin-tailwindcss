import { getTailwindPrefix } from "../prettier/index.js";
import { createClassGroupUtils, extendDefaultConfig, parseClassName } from "../tailwind-merge.js";
import { createVisitor, defineRule, getSettings, splitClassValueToParts } from "../util.js";

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
		const { stylesheet } = getSettings(context);
		const prefix = getTailwindPrefix({ stylesheet });
		const config = extendDefaultConfig({ prefix });

		const { getClassGroupId } = createClassGroupUtils();

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { classnames } = splitClassValueToParts(value);

				for (const classname of classnames) {
					const { isExternal, baseClassName, maybePostfixModifierPosition } = parseClassName(config, classname);

					if (isExternal) {
						report({
							messageId: "customClassname",
							data: {
								classname,
							},
						});
						continue;
					}

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
