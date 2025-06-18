import {
	createClassGroupUtils,
	createParseClassname,
	createSortModifiers,
	IMPORTANT_MODIFIER,
	MODIFIER_SEPARATOR,
} from "../tailwind-merge.js";
import { createVisitor, defineRule, splitClassValueToParts } from "../util.js";

const noContradictingClassnames = defineRule({
	meta: {
		type: "problem",
		docs: {
			category: "Possible Errors",
			description: "Disallow contradicting Tailwind CSS classnames (e.g. \"w-3 w-5\").",
			recommended: true,
		},
		messages: {
			conflictingClassnames: `Classnames {{classnames}} are conflicting!`,
		},
	},
	create(context) {
		const parseClassname = createParseClassname();
		const {
			getClassGroupId,
			getConflictingClassGroupIds,
		} = createClassGroupUtils();
		const sortModifiers = createSortModifiers();

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { classnames } = splitClassValueToParts(value);
				const conflictingIds = new Map<string, string>();

				for (const classname of classnames) {
					const {
						baseClassName,
						hasImportantModifier,
						maybePostfixModifierPosition,
						modifiers,
					} = parseClassname(classname);

					let hasPostfixModifier = !!maybePostfixModifierPosition;
					const classWithoutModifier = hasPostfixModifier
						? baseClassName.substring(0, maybePostfixModifierPosition)
						: baseClassName;
					let classGroupId = getClassGroupId(classWithoutModifier);

					if (!classGroupId) {
						if (!hasPostfixModifier) {
							// Not a Tailwind class
							continue;
						}
						classGroupId = getClassGroupId(baseClassName);
						if (!classGroupId) {
							// Not a Tailwind class
							continue;
						}
						hasPostfixModifier = false;
					}
					const variantModifier = sortModifiers(modifiers).join(MODIFIER_SEPARATOR);

					const modifierId = hasImportantModifier
						? variantModifier + IMPORTANT_MODIFIER
						: variantModifier;
					const hasModifiers = modifiers.length > 0;
					const qualifiedClass = hasModifiers ? `${modifierId}${MODIFIER_SEPARATOR}${classGroupId}` : classGroupId;

					const maybeConflictingClass = conflictingIds.get(qualifiedClass);
					if (maybeConflictingClass) {
						report({
							messageId: "conflictingClassnames",
							data: {
								classnames: `'${classname}' and '${maybeConflictingClass}'`,
							},
						});
					}
					else {
						conflictingIds.set(qualifiedClass, classname);
						const newConflictingIds = getConflictingClassGroupIds(classGroupId, hasImportantModifier);
						for (const conflictingId of newConflictingIds) {
							const qualifiedClass = hasModifiers ? `${modifierId}${MODIFIER_SEPARATOR}${conflictingId}` : conflictingId;
							conflictingIds.set(qualifiedClass, classname);
						}
					}
				}
			},
		});
	},
});

export default noContradictingClassnames;
