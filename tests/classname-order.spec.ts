import { describe, beforeAll, it, expect } from "vitest";
import { ESLint } from "eslint";
import path from "node:path";

describe("TailwindCSS ESLint Plugin Integration", () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = new ESLint({
			overrideConfigFile: path.resolve(import.meta.dirname, "eslint.config.ts")
		});
	});

	it("should not report errors for valid TailwindCSS usage", async () => {
		const result = await eslint.lintText(`<div class="custom container box-content lg:box-border">Simple, basic</div>`, {
			filePath: "test.tsx"
		})
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(0)
	});
});
