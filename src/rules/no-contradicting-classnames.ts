import type { TailwindClass } from "../tailwind-merge.js";
import { getTailwindPrefix } from "../prettier/index.js";
import {
	extendDefaultConfig,
	getConflictingClassGroupIds,
	IMPORTANT_MODIFIER,
	MODIFIER_SEPARATOR,
	parseClassName,
	sortModifiers,
} from "../tailwind-merge.js";
import { createVisitor, defineRule, getSettings, splitClassValueToParts } from "../util.js";

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
		const { stylesheet } = getSettings(context);
		const prefix = getTailwindPrefix({ stylesheet });
		const config = extendDefaultConfig({ prefix });

		function canonicalize({ modifiers, classGroup, hasImportantModifier, postfixModifier }: TailwindClass) {
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

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { classnames } = splitClassValueToParts(value);
				const conflictingIds = new Map<string, string>();

				for (const classname of classnames) {
					const parsed = parseClassName(config, classname);
					if (parsed.isExternal) {
						continue;
					}
					const qualifiedClass = canonicalize(parsed);
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
							const qualifiedClass = canonicalize({
								...parsed,
								classGroup: conflictingGroup,
							});
							conflictingIds.set(qualifiedClass, classname);
						}
					}
				}
			},
		});
	},
});

export default noContradictingClassnames;
