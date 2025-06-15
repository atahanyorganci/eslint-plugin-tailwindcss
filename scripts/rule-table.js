#!/usr/bin/env node

import plugin from "@yorganci/eslint-plugin-tailwindcss";

const rules = Object.entries(plugin.rules)
	.map(([name, { meta }]) => ({ name, ...meta.docs, fixable: meta.fixable === "code" }));

const MAP = {
	true: "✅",
	false: "❌",
};

const lines = [
	"| Rule | Description | Type | Recommended | Fixable |",
	"|------|-------------|------|-------------|---------|",
	...rules.map(({ name, description, category, recommended, fixable }) => `| \`${name}\` | ${description} | ${category} | ${MAP[recommended]} | ${MAP[fixable]} |`),
];

console.log(lines.join("\n"));
