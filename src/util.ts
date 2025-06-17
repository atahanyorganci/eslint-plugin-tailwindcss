import type { LanguageOptions, RuleContext, RuleDefinition, RuleVisitor, SuggestedEdit } from "@eslint/core";
import type { Rule, SourceCode } from "eslint";
import type { JSXAttribute, Literal, Node, TemplateElement } from "estree-jsx";
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

	const { classRegex: classRegexString } = getSettings(context);
	const classRegex = new RegExp(classRegexString);

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
					for (const quasi of node.value.expression.quasis) {
						visitTemplateElement(quasi);
					}
				}
			}
		},
	};
}

export const SettingsSchema = z.object({
	stylesheet: z.string(),
	classRegex: z.string().default("^class(?:Name)?$"),
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
