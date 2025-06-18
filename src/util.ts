import type { LanguageOptions, RuleContext, RuleDefinition, RuleVisitor, SuggestedEdit } from "@eslint/core";
import type { Rule, SourceCode } from "eslint";
import type { CallExpression, Expression, JSXAttribute, Literal, Node, TaggedTemplateExpression, TemplateElement, VariableDeclarator } from "estree-jsx";
import { z } from "zod";

export interface Options<TMessage extends string, TNode = Node> {
	LangOptions: LanguageOptions;
	Code: SourceCode;
	RuleOptions: unknown[];
	Visitor: RuleVisitor;
	Node: TNode;
	MessageIds: TMessage;
	ExtRuleDocs: {
		category: "Possible Errors" | "Stylistic Issues" | "Best Practices";
		description: string;
		recommended: boolean;
	};
}

export function defineRule<TMessage extends string>(rule: RuleDefinition<Options<TMessage>>): Rule.RuleModule {
	return rule;
}

export interface Report<TMessage extends string> {
	messageId: TMessage;
	data?: Record<string, string>;
	suggest?: SuggestedEdit[];
	fix?: {
		type: "value";
		value: string;
	};
}

export interface Visitor<TMessage extends string, TOptions extends Options<TMessage>> {
	context: RuleContext<Omit<TOptions, "Visitor" | "ExtRuleDocs">>;
	visitClassValue: (args: { value: string; report: (report: Report<TMessage>) => void }) => void;
}

export function createVisitor<TMessage extends string, TOptions extends Options<TMessage>>({ context, visitClassValue }: Visitor<TMessage, TOptions>): TOptions["Visitor"] {
	function visitTemplateElement(quasi: TemplateElement): void {
		if (typeof quasi.value.raw !== "string") {
			return;
		}
		visitClassValue({
			value: quasi.value.raw,
			report: ({ fix, ...report }) => {
				if (!quasi.range) {
					return;
				}
				context.report({
					node: quasi,
					...report,
					fix(fixer) {
						if (fix?.type === "value") {
							return fixer.replaceText(quasi, fix?.value);
						}
						return null;
					},
				});
			},
		});
	}

	function visitLiteral(node: Literal): void {
		if (typeof node.value !== "string" || typeof node.raw !== "string") {
			return;
		}
		visitClassValue({
			value: node.value,
			report: ({ fix, ...report }) => {
				context.report({
					node,
					...report,
					fix(fixer) {
						if (fix?.type === "value") {
							const replacement = node.raw!.replace(node.value as string, fix.value);
							return fixer.replaceText(node, replacement);
						}
						return null;
					},
				});
			},
		});
	}

	/**
	 * Visit an expression's children for CSS class names. Including `Literal` with string values and
	 * `TemplateLiteral`s with string values.
	 *
	 * @param node - The expression to visit
	 */
	function visitExpression(node: Expression): void {
		switch (node.type) {
			case "ArrayExpression":
				// `ArrayExpression` is a list of expressions, so we need to visit each element
				for (const element of node.elements) {
					if (!element || element.type === "SpreadElement") {
						continue;
					}
					visitExpression(element);
				}
				return;
			case "ArrowFunctionExpression":
				return;
			case "AssignmentExpression":
				return visitExpression(node.right);
			case "AwaitExpression":
				return visitExpression(node.argument);
			case "BinaryExpression":
				if (node.left.type !== "PrivateIdentifier") {
					visitExpression(node.left);
				}
				return visitExpression(node.right);
			case "CallExpression":
				// Skip `CallExpression` as it will be visited by root visitor
				return;
			case "ChainExpression":
				return visitExpression(node.expression);
			case "ClassExpression":
				return; // Skip class body
			case "ConditionalExpression":
				// Skip `node.test` as it's evaluated to a boolean
				visitExpression(node.consequent);
				return visitExpression(node.alternate);
			case "FunctionExpression":
				return; // Skip function body
			case "Identifier":
				return; // No literals to visit
			case "ImportExpression":
				// Skip `node.source` as it doesn't contain CSS class names
				return;
			case "Literal":
				return visitLiteral(node);
			case "LogicalExpression":
				visitExpression(node.left);
				return visitExpression(node.right);
			case "MemberExpression":
				if (node.object.type !== "Super") {
					visitExpression(node.object);
				}
				if (node.computed && node.property.type !== "PrivateIdentifier") {
					visitExpression(node.property);
				}
				return;
			case "MetaProperty":
				return; // No literals to visit
			case "NewExpression":
				if (node.callee.type !== "Super") {
					visitExpression(node.callee);
				}
				for (const arg of node.arguments) {
					if (arg.type !== "SpreadElement") {
						visitExpression(arg);
					}
				}
				return;
			case "ObjectExpression":
				for (const prop of node.properties) {
					if (prop.type === "Property") {
						if (prop.computed && prop.key.type !== "PrivateIdentifier") {
							visitExpression(prop.key);
						}
						if (
							prop.value.type !== "ObjectPattern"
							&& prop.value.type !== "ArrayPattern"
							&& prop.value.type !== "RestElement"
							&& prop.value.type !== "AssignmentPattern"
						) {
							visitExpression(prop.value);
						}
					}
					else if (prop.type === "SpreadElement") {
						visitExpression(prop.argument);
					}
				}
				return;
			case "SequenceExpression":
				for (const expr of node.expressions) {
					visitExpression(expr);
				}
				return;
			case "TaggedTemplateExpression":
				// Skip `TaggedTemplateExpression` as it will be visited by root visitor
				return;
			case "TemplateLiteral":
				for (const expr of node.expressions) {
					visitExpression(expr);
				}
				for (const quasi of node.quasis) {
					visitTemplateElement(quasi);
				}
				return;
			case "ThisExpression":
				return; // No literals to visit
			case "UnaryExpression":
				return visitExpression(node.argument);
			case "UpdateExpression":
				return visitExpression(node.argument);
			case "YieldExpression":
				if (!node.argument) {
					return;
				}
				return visitExpression(node.argument);
			default:
		}
	}

	const {
		classRegex: classRegexString,
		tags: tagsArray,
		classFunctions: classFunctionsArray,
		identifierRegex: identifierRegexString,
	} = getSettings(context);
	const classRegex = new RegExp(classRegexString);
	const tags = new Set(tagsArray);
	const classFunctions = new Set(classFunctionsArray);
	const identifierRegex = new RegExp(identifierRegexString, "i");

	return {
		JSXAttribute(node: JSXAttribute) {
			let nodeName: string;
			if (typeof node.name.name === "string") {
				nodeName = node.name.name;
			}
			else {
				nodeName = node.name.name.name;
			}
			if (!classRegex.test(nodeName) || !node.value) {
				return;
			}

			if (node.value.type === "Literal") {
				visitLiteral(node.value);
			}
			else if (node.value.type === "JSXExpressionContainer" && node.value.expression.type !== "JSXEmptyExpression") {
				if (node.value.expression.type === "Literal") {
					visitLiteral(node.value.expression);
				}
				else if (node.value.expression.type === "TemplateLiteral") {
					for (const expression of node.value.expression.expressions) {
						visitExpression(expression);
					}
					for (const quasi of node.value.expression.quasis) {
						visitTemplateElement(quasi);
					}
				}
			}
		},
		TaggedTemplateExpression(node: TaggedTemplateExpression) {
			if (node.tag.type !== "Identifier" || !tags.has(node.tag.name)) {
				return;
			}
			for (const expression of node.quasi.expressions) {
				visitExpression(expression);
			}
			for (const quasi of node.quasi.quasis) {
				visitTemplateElement(quasi);
			}
		},
		CallExpression(node: CallExpression) {
			if (node.callee.type !== "Identifier" || !classFunctions.has(node.callee.name)) {
				return;
			}
			for (const argument of node.arguments) {
				if (argument.type !== "SpreadElement") {
					visitExpression(argument);
				}
				else {
					visitExpression(argument.argument);
				}
			}
		},
		VariableDeclarator(node: VariableDeclarator) {
			if (node.id.type !== "Identifier" || !identifierRegex.test(node.id.name) || !node.init) {
				return;
			}
			visitExpression(node.init);
		},
	};
}

/**
 * Configuration schema for `@yorganci/eslint-plugin-tailwindcss`.
 */
export const SettingsSchema = z.object({
	/**
	 * Path to CSS file with `@import "tailwindcss";` directive.
	 */
	stylesheet: z.string(),
	/**
	 * Regex to match class names.
	 */
	classRegex: z.string().default("^class(?:Name)?$"),
	/**
	 * List of class functions to check for class names.
	 */
	classFunctions: z.string().array().default(["classnames", "clsx", "ctl", "twMerge", "twJoin", "cn"]),
	/**
	 * List of tags to check for class names.
	 */
	tags: z.string().array().default(["tw"]),
	/**
	 * Regex for identifiers to check for class names.
	 */
	identifierRegex: z.string().default("^.*styles$"),
});
export type Settings = z.infer<typeof SettingsSchema>;

export function getSettings<TMessage extends string>(context: RuleContext<Pick<Options<TMessage>, "LangOptions" | "Code" | "MessageIds" | "RuleOptions" | "Node">>) {
	const tailwindcss = context.settings["tailwindcss"];
	if (!tailwindcss) {
		throw new Error("Configuration error, `settings.tailwindcss` is missing.");
	}
	const result = SettingsSchema.safeParse(tailwindcss);
	if (result.success) {
		return result.data;
	}
	const { fieldErrors } = result.error.flatten();
	const lines = Object.entries(fieldErrors).flatMap(([field, errors]) => errors.map(error => `❌ \`settings.tailwindcss.${field}\`: ${error}`));
	throw new Error(["Configuration error, check `settings.tailwindcss`.", ...lines].join("\n"));
}
