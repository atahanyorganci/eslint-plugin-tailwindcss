/**
 * Type of the result returned by the `experimentalParseClassName` function.
 *
 * This is an experimental feature and may introduce breaking changes in any minor version update.
 */
export interface ParsedClassName {
	/**
	 * Whether the class is external and merging logic should be sipped.
	 *
	 * If this is `true`, the class will be treated as if it wasn't a Tailwind class and will be passed through as is.
	 */
	isExternal?: boolean;
	/**
	 * Modifiers of the class in the order they appear in the class.
	 *
	 * @example ['hover', 'dark'] // for `hover:dark:bg-gray-100`
	 */
	modifiers: string[];
	/**
	 * Whether the class has an `!important` modifier.
	 *
	 * @example true // for `hover:dark:!bg-gray-100`
	 */
	hasImportantModifier: boolean;
	/**
	 * Base class without preceding modifiers.
	 *
	 * @example 'bg-gray-100' // for `hover:dark:bg-gray-100`
	 */
	baseClassName: string;
	/**
	 * Index position of a possible postfix modifier in the class.
	 * If the class has no postfix modifier, this is `undefined`.
	 *
	 * This property is prefixed with "maybe" because tailwind-merge does not know whether something is a postfix modifier or part of the base class since it's possible to configure Tailwind CSS classes which include a `/` in the base class name.
	 *
	 * If a `maybePostfixModifierPosition` is present, tailwind-merge first tries to match the `baseClassName` without the possible postfix modifier to a class group. If that fails, it tries again with the possible postfix modifier.
	 *
	 * @example 11 // for `bg-gray-100/50`
	 */
	maybePostfixModifierPosition: number | undefined;
}

export const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;

export const ARBITRARY_VALUE_REGEX = /\[(?:(\w[\w-]*):)?(.+)\]/;

export function createParseClassname(prefix?: string) {
	/**
	 * Parse class name into parts.
	 *
	 * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	 * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	 */
	let parseClassName = (className: string): ParsedClassName => {
		const modifiers = [];

		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition: number | undefined;

		for (let index = 0; index < className.length; index++) {
			const currentCharacter = className[index];

			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
					continue;
				}

				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}

			if (currentCharacter === "[") {
				bracketDepth++;
			}
			else if (currentCharacter === "]") {
				bracketDepth--;
			}
			else if (currentCharacter === "(") {
				parenDepth++;
			}
			else if (currentCharacter === ")") {
				parenDepth--;
			}
		}

		const baseClassNameWithImportantModifier
			= modifiers.length === 0 ? className : className.substring(modifierStart);
		const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
		const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
		const maybePostfixModifierPosition
			= postfixModifierPosition && postfixModifierPosition > modifierStart
				? postfixModifierPosition - modifierStart
				: undefined;

		return {
			modifiers,
			hasImportantModifier,
			baseClassName,
			maybePostfixModifierPosition,
		};
	};

	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = className =>
			className.startsWith(fullPrefix)
				? parseClassNameOriginal(className.substring(fullPrefix.length))
				: {
						isExternal: true,
						modifiers: [],
						hasImportantModifier: false,
						baseClassName: className,
						maybePostfixModifierPosition: undefined,
					};
	}

	return parseClassName;
}

function stripImportantModifier(baseClassName: string) {
	if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
		return baseClassName.substring(0, baseClassName.length - 1);
	}

	/**
	 * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
	 * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
	 */
	if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
		return baseClassName.substring(1);
	}

	return baseClassName;
}
