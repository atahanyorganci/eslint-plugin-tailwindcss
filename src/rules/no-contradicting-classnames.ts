import type { ResolvedConfig, TailwindClass } from "../tailwind-merge.js";
import {
	getConflictingClassGroupIds,
	IMPORTANT_MODIFIER,
	MODIFIER_SEPARATOR,
	parseClassName,
	sortModifiers,
} from "../tailwind-merge.js";
import { defineRule, splitClassValueToParts } from "../util.js";

function canonicalize(config: ResolvedConfig, { modifiers, classGroup, hasImportantModifier, postfixModifier }: TailwindClass) {
	const parts = [];
	if (modifiers.length > 0) {
		parts.push(sortModifiers(config, modifiers).join(MODIFIER_SEPARATOR));
	}
	parts.push(classGroup);
	if (hasImportantModifier) {
		parts.push(IMPORTANT_MODIFIER);
	}
	if (postfixModifier) {
		parts.push(postfixModifier);
	}
	return parts.join(MODIFIER_SEPARATOR);
}

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
	visit({ config, value, report }) {
		const { classnames } = splitClassValueToParts(value);
		const conflictingIds = new Map<string, string>();

		for (const classname of classnames) {
			const parsed = parseClassName(config, classname);
			if (parsed.isExternal) {
				continue;
			}
			const qualifiedClass = canonicalize(config, parsed);
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
				const conflictingGroups = getConflictingClassGroupIds(config, parsed.classGroup, parsed.hasImportantModifier);
				for (const conflictingGroup of conflictingGroups) {
					const qualifiedClass = canonicalize(config, {
						...parsed,
						classGroup: conflictingGroup,
					});
					conflictingIds.set(qualifiedClass, classname);
				}
			}
		}
	},
});

export default noContradictingClassnames;
