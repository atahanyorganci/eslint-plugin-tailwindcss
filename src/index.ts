import type { ESLint } from "eslint";

const plugin = {
  meta: {
    name: "@yorganci/eslint-plugin-tailwindcss",
    version: "0.0.0",
    namespace: "eslint-plugin-tailwindcss",
  },
  rules: {},
} satisfies ESLint.Plugin;

export default plugin;
