import antfu from "@antfu/eslint-config";
import tailwindcss from "@yorganci/eslint-plugin-tailwindcss";

export default antfu({
	formatters: true,
	react: true,
	stylistic: {
		quotes: "double",
		semi: true,
		indent: "tab",
	},
})
	.append(tailwindcss.configs.strict)
	.append({
		settings: {
			tailwindcss: {
				stylesheet: "./src/styles/globals.css",
			},
		},
	});
