import type { TailwindClass } from "../tailwind-merge.js";
import { parseClassName } from "../tailwind-merge.js";
import { defineRule, joinClassValueParts, splitClassValueToParts } from "../util.js";

const NEGATIVE_UTILITIES = new Set([
	/**
	 * Margin
	 * @see https://tailwindcss.com/docs/margin
	 */
	["m", "mx", "my", "mt", "mr", "mb", "ml", "ms", "me"],
	/**
	 * Padding
	 * @see https://tailwindcss.com/docs/padding
	 */
	["p", "px", "py", "pt", "pr", "pb", "pl", "ps", "pe"],
	/**
	 * Space Between
	 * @see https://tailwindcss.com/docs/margin
	 */
	["space-x", "space-y"],
	/**
	 * Positioning - Inset
	 * @see https://tailwindcss.com/docs/top-right-bottom-left
	 */
	["inset", "inset-x", "inset-y"],
	/**
	 * Positioning - Directional
	 * @see https://tailwindcss.com/docs/top-right-bottom-left
	 */
	["top", "right", "bottom", "left", "start", "end"],
	/**
	 * Transforms
	 * @see https://tailwindcss.com/docs/translate
	 */
	["translate-x", "translate-y", "rotate", "skew-x", "skew-y", "scale", "scale-x", "scale-y"],
	/**
	 * Typography
	 * @see https://tailwindcss.com/docs/letter-spacing
	 */
	["tracking", "indent"],
	/**
	 * Scroll Margin
	 * @see https://tailwindcss.com/docs/scroll-margin
	 */
	["scroll-m", "scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml", "scroll-ms", "scroll-me"],
	/**
	 * Scroll Padding
	 * @see https://tailwindcss.com/docs/scroll-padding
	 */
	["scroll-p", "scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl", "scroll-ps", "scroll-pe"],
].flat());

function matchNegativeArbitraryValue(classname: string) {
	const match = classname.match(/^(?<baseClass>\w+(?:-\w+)*)-\[-(?<value>\d+(\.\d+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc|deg)?)\]$/);
	if (!match || !match.groups || !match.groups["baseClass"] || !match.groups["value"]) {
		return;
	}
	const { baseClass, value } = match.groups;
	return { baseClass, value };
}

function tryReplaceNegativeArbitraryValue(classname: string, { baseClass }: TailwindClass) {
	const match = matchNegativeArbitraryValue(baseClass);
	if (!match || !NEGATIVE_UTILITIES.has(match.baseClass)) {
		return;
	}
	return classname.replace(baseClass, `-${match.baseClass}-[${match.value}]`);
}

const noUnnecessaryNegativeArbitraryValue = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow unnecessary negative arbitrary values when alternative exists.",
			recommended: false,
		},
		messages: {
			unnecessaryNegativeArbitraryValue: `Arbitrary value classname '{{classname}}' should use negative modifier '{{replacement}}' instead`,
		},
		fixable: "code",
	},
	visit({ config, value, report }) {
		const { leading, classnames, whitespaces } = splitClassValueToParts(value);

		for (let i = 0; i < classnames.length; i++) {
			const classname = classnames[i]!;
			const parsed = parseClassName(config, classname);
			if (parsed.isExternal) {
				continue;
			}
			const replacement = tryReplaceNegativeArbitraryValue(classname, parsed);
			if (!replacement) {
				continue;
			}
			const fixed = joinClassValueParts({
				leading,
				classnames: [...classnames.slice(0, i), replacement, ...classnames.slice(i + 1)],
				whitespaces,
			});
			report({
				messageId: "unnecessaryNegativeArbitraryValue",
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

export default noUnnecessaryNegativeArbitraryValue;
