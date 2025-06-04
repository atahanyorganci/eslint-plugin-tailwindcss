import antfu from "@antfu/eslint-config";

export default antfu({
	formatters: true,
	stylistic: {
		quotes: "double",
		semi: true,
		indent: "tab",
	},
	rules: {
		"antfu/no-top-level-await": "off",
	},
	ignores: ["lib", "tests"],
});
