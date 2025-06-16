import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`classname-order`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/classname-order": "error",
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

	it("should report an error with simple content", async () => {
		const result = await eslint.lintText(`<div class="text-red-500 font-light">Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report an error with simple content for JSX expression container", async () => {
		const result = await eslint.lintText(`<div class={"text-red-500 font-light"}>Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report an error with simple content for JSX expression container with template literal", async () => {
		const result = await eslint.lintText(`<div class={\`text-red-500 font-light\`}>Simple, basic</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});
});
