import type { TailwindClass } from "../tailwind-merge.js";
import { getTailwindPrefix } from "../prettier/index.js";
import { extendDefaultConfig, parseClassName } from "../tailwind-merge.js";
import { createVisitor, defineRule, getSettings, joinClassValueParts, splitClassValueToParts } from "../util.js";

const REPLACERS = {
	w: {
		"50%": "1/2",
	},
} as Record<string, Record<string, string>>;

function tryReplaceArbitraryValue(classname: string, { args }: TailwindClass) {
	const match = args.match(/(?<baseClass>\w+)-\[(?<value>.+)\]/);
	if (!match || !match.groups || !match.groups["baseClass"] || !match.groups["value"]) {
		return;
	}
	const { baseClass, value } = match.groups;
	const replacers = REPLACERS[baseClass];
	if (!replacers) {
		return;
	}
	const replacementValue = replacers[value];
	if (!replacementValue) {
		return;
	}
	const replacement = classname.replace(/\[.+\]/, replacementValue);
	return replacement;
}

const noUnnecessaryArbitraryValue = defineRule({
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
		const { stylesheet } = getSettings(context);
		const prefix = getTailwindPrefix({ stylesheet });
		const config = extendDefaultConfig({ prefix });

		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const { leading, classnames, whitespaces } = splitClassValueToParts(value);

				for (let i = 0; i < classnames.length; i++) {
					const classname = classnames[i]!;
					const parsed = parseClassName(config, classname);
					if (parsed.isExternal) {
						continue;
					}
					const replacement = tryReplaceArbitraryValue(classname, parsed);
					if (!replacement) {
						continue;
					}
					const fixed = joinClassValueParts({
						leading,
						classnames: [...classnames.slice(0, i), replacement, ...classnames.slice(i + 1)],
						whitespaces,
					});
					report({
						messageId: "unnecessaryArbitraryValue",
						data: {
							classname,
							replacement,
						},
						fix: {
							type: "value",
							value: fixed,
						},
					});
				}
			},
		});
	},
});

export default noUnnecessaryArbitraryValue;
