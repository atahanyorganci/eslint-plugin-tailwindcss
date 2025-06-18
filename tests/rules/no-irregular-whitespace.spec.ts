import type { ESLint } from "eslint";
import { beforeAll, describe, expect, it } from "vitest";
import { loadEslint } from "../fixtures/eslint.js";

describe("`no-irregular-whitespace`", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = loadEslint({
			rules: {
				"tailwindcss/no-irregular-whitespace": "error",
			},
		});
	});

	it("should report error for leading whitespace", async () => {
		const result = await eslint.lintText(`<div class=" block">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for trailing whitespace", async () => {
		const result = await eslint.lintText(`<div class="block ">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for multiple spaces between classes", async () => {
		const result = await eslint.lintText(`<div class="block  text-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for tab characters", async () => {
		const result = await eslint.lintText(`<div class="block\ttext-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for newline characters", async () => {
		const result = await eslint.lintText(`<div class="block\ntext-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for carriage return characters", async () => {
		const result = await eslint.lintText(`<div class="block\rtext-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error for mixed whitespace types", async () => {
		const result = await eslint.lintText(`<div class=" block\t \ntext-red ">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error in template literals", async () => {
		const result = await eslint.lintText(`<div class={\`block  text-red\`}>Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should report error in conditional expressions", async () => {
		const [result] = await eslint.lintText(`<div class={isActive ? "block  active" : "block"}>Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"block active"`);
	});

	it("should not report error for single spaces", async () => {
		const result = await eslint.lintText(`<div class="block text-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0);
	});

	it("should not report error for empty class", async () => {
		const result = await eslint.lintText(`<div class="">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0);
	});

	it("should not report error for single class", async () => {
		const result = await eslint.lintText(`<div class="block">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0);
	});

	it("should handle className prop", async () => {
		const result = await eslint.lintText(`<div className="block  text-red">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should handle multiple irregular whitespace issues", async () => {
		const result = await eslint.lintText(`<div class=" block  text-red\t\nflex ">Content</div>`, {
			filePath: "test.tsx",
		});
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(1);
	});

	it("should handle `tw` tagged template expression", async () => {
		const [result] = await eslint.lintText(`tw\` block  text-red   \``, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe("block text-red");
	});

	it("should report error for styles in constants", async () => {
		const [result] = await eslint.lintText(`const styles = "block  text-red";`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(1);
		expect(result.messages[0].fix?.text).toBe(`"block text-red"`);
	});

	it("should report error for styles in multiple constants", async () => {
		const [result] = await eslint.lintText(`const blueStyles = "  block  text-blue", redStyles = "block  text-red";`, {
			filePath: "test.tsx",
		});
		expect(result.messages).toHaveLength(2);
		expect(result.messages[0].fix?.text).toBe(`"block text-blue"`);
		expect(result.messages[1].fix?.text).toBe(`"block text-red"`);
	});
});
