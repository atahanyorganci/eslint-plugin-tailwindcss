import type { Rule } from "eslint";
import { z } from "zod";

export const SettingsSchema = z.object({
	stylesheet: z.string(),
	classRegex: z.string().default("^class(?:Name)?$"),
});
export type Settings = z.infer<typeof SettingsSchema>;

export function getSettings(context: Rule.RuleContext) {
	const settings = SettingsSchema.parse(context.settings["tailwindcss"]);
	return settings;
}
