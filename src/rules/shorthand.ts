import { createParseClassname } from "../tailwind-merge.js";
import { createVisitor, defineRule } from "../util.js";

const COMBINABLE = /^(?<baseClass>w|h|mx|my|px|py)-(?<value>.+)$/;

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
	create(context) {
		return createVisitor({
			context,
			visitClassValue: ({ value, report }) => {
				const parseClassname = createParseClassname();
				const classNames = new Set(value.split(/\s+/).filter(Boolean));

				for (const classname of classNames) {
					const { baseClassName } = parseClassname(classname);
					const match = matchCombinableClass(baseClassName);
					if (!match) {
						continue;
					}
					const pairBaseClass = PAIRS[match.baseClass];
					if (!pairBaseClass) {
						continue;
					}
					const replacementValue = baseClassName.replace(match.baseClass, pairBaseClass.pair);
					const pair = classname.replace(baseClassName, replacementValue);

					if (classNames.has(pair)) {
						const replacementValue = baseClassName.replace(match.baseClass, pairBaseClass.shorthand);
						const shorthand = classname.replace(baseClassName, replacementValue);

						report({
							messageId: "shorthandCandidate",
							data: {
								first: pair,
								second: classname,
								shorthand,
							},
						});
					}
				}
			},
		});
	},
});

export default shorthand;
