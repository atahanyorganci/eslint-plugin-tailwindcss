import { RuleTester } from "eslint";
import { describe, expect, it } from "vitest";

const ruleTester = new RuleTester({
	languageOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
});

describe("classnames-order", () => {
	it("simple", () => {
		expect(ruleTester).toBeDefined();
	});
});
