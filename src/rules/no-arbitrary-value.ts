import { ARBITRARY_VALUE_REGEX, parseClassName } from "../tailwind-merge.js";
import { defineRule, splitClassValueToParts } from "../util.js";

const noArbitraryValue = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			category: "Stylistic Issues",
			description: "Disallow using arbitrary values in classnames.",
			recommended: false,
		},
		messages: {
			arbitraryValue: `Class '{{classname}}' has arbitrary value.`,
		},
	},
	visit({ config, value, report }) {
		const { classnames } = splitClassValueToParts(value);

		for (const classname of classnames) {
			const parsed = parseClassName(config, classname);
			if (parsed.isExternal || !ARBITRARY_VALUE_REGEX.test(parsed.baseClass)) {
				continue;
			}
			report({
				messageId: "arbitraryValue",
				data: {
					classname,
				},
			});
		}
	},
});

export default noArbitraryValue;
