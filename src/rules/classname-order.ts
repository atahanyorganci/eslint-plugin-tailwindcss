import { reorderClasses } from "../prettier/index.js";
import { createVisitor, defineRule, getSettings } from "../util.js";

function arraysEqual<T>(a: T[], b: T[]): boolean {
	return a.length === b.length && a.every((value, i) => value === b[i]);
}

const CLASS_LITERAL = /(?<leading>\s+)?(?<classname>\S+)(?<trailing>\s+)?/g;

function splitClassValueToParts(text: string) {
	const classnames = [];
	const whitespaces = [];

	let match = CLASS_LITERAL.exec(text);
	let leading: string | undefined;
	while (match !== null) {
		if (!match.groups || !match.groups["classname"]) {
			throw new Error("Unreachable");
		}

		if (match.groups["leading"]) {
			leading = match.groups["leading"];
		}
		classnames.push(match.groups["classname"]);
		whitespaces.push(match.groups["trailing"]);

		match = CLASS_LITERAL.exec(text);
	}
	return {
		leading,
		classnames,
		whitespaces,
	};
}

function joinClassValueParts({ leading, classnames, whitespaces }: ReturnType<typeof splitClassValueToParts>) {
	const parts = leading ? [leading] : [];
	for (let i = 0; i < classnames.length; i++) {
		const classname = classnames[i];
		const whitespace = whitespaces[i];
		if (classname) {
			parts.push(classname);
		}
		if (whitespace) {
			parts.push(whitespace);
		}
	}
	return parts.join("");
}

const classnameOrder = defineRule({
	meta: {
		type: "problem",
		docs: {
			category: "Possible Errors",
			description: "Enforce consistent order of the TailwindCSS classes.",
			recommended: true,
		},
		messages: {
			invalidOrder: "TailwindCSS classes should be sorted by category",
		},
		fixable: "code",
	},
	create(context) {
		const { stylesheet } = getSettings(context);

		return createVisitor({
			context,
			classLiteralVisitor: ({ value, report }) => {
				const { classnames, leading, whitespaces } = splitClassValueToParts(value);
				if (classnames.length === 0) {
					return;
				}

				const orderedClasses = reorderClasses({
					stylesheet,
					classes: classnames,
				});

				if (!arraysEqual(classnames, orderedClasses)) {
					report({
						messageId: "invalidOrder",
						replacementText: joinClassValueParts({ leading, classnames: orderedClasses, whitespaces }),
					});
				}
			},
		});
	},
});

export default classnameOrder;
