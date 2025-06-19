import { parseClassName } from "../tailwind-merge.js";
import { defineRule, splitClassValueToParts } from "../util.js";

const COMBINABLE = /^-?(?<baseClass>w|h|mx|my|px|py|mt|ml|mr|mb)-(?<value>.+)$/;

function matchCombinableClass(classname: string) {
	const match = classname.match(COMBINABLE);
	if (!match || !match.groups || !match.groups["baseClass"] || !match.groups["value"]) {
		return;
	}
	const { baseClass, value } = match.groups;
	return { baseClass, value };
}

const HALF_PAIRS = {
	h: { pair: "w", shorthand: "size" },
	mx: { pair: "my", shorthand: "m" },
	mt: { pair: "mb", shorthand: "my" },
	ml: { pair: "mr", shorthand: "mx" },
	px: { pair: "py", shorthand: "p" },
} as Record<string, { pair: string; shorthand: string }>;
const PAIRS: Record<string, { pair: string; shorthand: string }> = Object.fromEntries(Object.entries(HALF_PAIRS).flatMap(([key, value]) => [[key, value] as const, [value, key] as const]));

const shorthand = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Best Practices" as const,
			description: "Enforce usage of shorthand Tailwind CSS classname.",
			recommended: true,
		},
		messages: {
			shorthandCandidate: `Classnames '{{first}} {{second}}' could be replaced by the '{{shorthand}}' shorthand!`,
		},
		fixable: "code",
	},
	visit({ config, value, report }) {
		const { leading, classnames, whitespaces } = splitClassValueToParts(value);
		const classIndexes = new Map(classnames.map((classname, i) => [classname, i]));

		for (const [classname, index] of classIndexes.entries()) {
			const parsed = parseClassName(config, classname);
			if (parsed.isExternal) {
				continue;
			}
			// Find the base class that can be combined with another class
			const match = matchCombinableClass(parsed.baseClass);
			if (!match) {
				continue;
			}
			// Find the pair class that can be combined with the base class
			const pairBaseClass = PAIRS[match.baseClass];
			if (!pairBaseClass) {
				continue;
			}
			// Replace the base class with the pair class
			const basePairValue = parsed.baseClass.replace(match.baseClass, pairBaseClass.pair);
			const pair = classname.replace(parsed.baseClass, basePairValue);
			const pairIndex = classIndexes.get(pair);
			if (typeof pairIndex !== "number") {
				continue;
			}
			// Replace the base class with the shorthand class
			const baseShorthandValue = parsed.baseClass.replace(match.baseClass, pairBaseClass.shorthand);
			const shorthand = classname.replace(parsed.baseClass, baseShorthandValue);

			// Reassemble the class value with the new classname
			const parts = leading ? [leading] : [];
			for (let i = 0; i < classnames.length; i++) {
				if (i === pairIndex) {
					continue;
				}
				const classname = classnames[i]!;
				if (i === index) {
					parts.push(shorthand);
				}
				else {
					parts.push(classname);
				}
				const whitespace = whitespaces[i];
				if (whitespace) {
					parts.push(whitespace);
				}
			}

			report({
				messageId: "shorthandCandidate",
				data: {
					first: pair,
					second: classname,
					shorthand,
				},
				fix: {
					type: "value",
					value: parts.join(""),
				},
			});
		}
	},
});

export default shorthand;
