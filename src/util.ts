import type { LanguageOptions, RuleContext, RuleDefinition, RuleVisitor } from "@eslint/core";
import type { Rule, SourceCode } from "eslint";
import type { Node } from "estree-jsx";
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
