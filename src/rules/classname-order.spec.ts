import { RuleTester } from "eslint";
import { describe, it } from "vitest";
import classNameOrder from "./classname-order.js";

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
		ruleTester.run("classnames-order", classNameOrder, {
			valid: [
				{
					code: `<div class="custom container box-content lg:box-border">Simple, basic</div>`,
				},
			],
			invalid: [],
		});
	});
});
