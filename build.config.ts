import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	failOnWarn: false,
	entries: [
		{
			builder: "mkdist",
			input: "./src",
			pattern: ["**/*.ts", "!**/*.spec.ts"],
			declaration: true,
			ext: "js",
		},
	],
});
