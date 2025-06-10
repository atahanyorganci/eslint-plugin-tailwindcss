import path from "node:path";
import { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";

describe("`classname-order`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = new ESLint({
			overrideConfigFile: path.resolve(import.meta.dirname, "eslint.config.ts"),
			baseConfig: {
				rules: {
					"tailwindcss/classname-order": "error",
				},
			},
		});
	});

	it("should not report an error with simple content", async () => {
		const result = await eslint.lintText(`<div class="custom container box-content lg:box-border">Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0);
	});
});
