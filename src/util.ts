import type { LanguageOptions, RuleContext, RuleDefinition, RuleVisitor, SuggestedEdit } from "@eslint/core";
import type { Rule, SourceCode } from "eslint";
import type { JSXAttribute, Node } from "estree-jsx";
import { z } from "zod";

export interface Options<TMessage extends string> {
	LangOptions: LanguageOptions;
	Code: SourceCode;
	RuleOptions: unknown[];
	Visitor: RuleVisitor;
	Node: Node;
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
	replacementText?: string;
	suggest?: SuggestedEdit[];
}

export interface Visitor<TMessage extends string, TOptions extends Options<TMessage>> {
	context: RuleContext<Omit<TOptions, "Visitor" | "ExtRuleDocs">>;
	classLiteralVisitor: (args: { value: string; report: (report: Report<TMessage>) => void }) => void;
}

export function createVisitor<TMessage extends string, TOptions extends Options<TMessage>>({ context, classLiteralVisitor }: Visitor<TMessage, TOptions>): TOptions["Visitor"] {
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

			if (
				classRegex.test(nodeName)
				&& node.value
				&& node.value.type === "Literal"
				&& typeof node.value.value === "string"
			) {
				classLiteralVisitor({
					value: node.value.value,
					report: ({ replacementText, messageId, data, suggest }) => {
						context.report({
							node,
							messageId,
							data,
							suggest,
							fix: replacementText ? fixer => fixer.replaceText(node.value, `"${replacementText}"`) : undefined,
						});
					},
				});
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
