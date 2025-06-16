import type { JSXAttribute } from "estree-jsx";
import { createParseClassname } from "../tailwind-merge.js";
import { defineRule, getSettings } from "../util.js";

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
		const { classRegex: classRegexString } = getSettings(context);
		const classRegex = new RegExp(classRegexString);
		const parseClassname = createParseClassname();

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
					const classNames = new Set(node.value.value.split(/\s+/).filter(Boolean));

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

							context.report({
								node,
								messageId: "shorthandCandidate",
								data: {
									first: pair,
									second: classname,
									shorthand,
								},
							});
						}
					}
				}
			},
		};
	},
});

export default shorthand;
