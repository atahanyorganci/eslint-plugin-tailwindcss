# React + TypeScript + Vite

This template provides a minimal setup to get React and Tailwind CSS working in Vite with HMR and opinionated ESLint rules.

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for React with HMR
- [`@tailwindcss/vite`](https://github.com/tailwindlabs/tailwindcss/tree/main/packages/%40tailwindcss-vite) for Tailwind CSS

## ESLint Config

Sample ESLint config is based on `@antfu/eslint-config` and strict rules from `@yorganci/eslint-plugin-tailwindcss`.

```ts
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
				// `stylesheet` MUST point to CSS file with `@import "tailwindcss"` call
				stylesheet: "./src/styles/globals.css",
			},
		},
	});
```

Checkout [`Counter`](./src/components/counter.tsx) and [`Header`](./src/components/header.tsx) components for sample errors.
