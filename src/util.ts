import type { Rule } from "eslint";
import { z } from "zod";

export const SettingsSchema = z.object({
	stylesheet: z.string(),
	classRegex: z.string().default("^class(?:Name)?$"),
});
export type Settings = z.infer<typeof SettingsSchema>;

export function getSettings(context: Rule.RuleContext) {
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
