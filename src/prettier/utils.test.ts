import type { StringChange } from "./types.js";
import { describe, it } from "vitest";
import { spliceChangesIntoString } from "./utils.js";

describe("spliceChangesIntoString", () => {
	it("can apply changes to a string", ({ expect }) => {
		const str = "the quick brown fox jumps over the lazy dog";
		const changes: StringChange[] = [
			//
			{ start: 10, end: 15, before: "brown", after: "purple" },
		];

		expect(spliceChangesIntoString(str, changes)).toBe(
			"the quick purple fox jumps over the lazy dog",
		);
	});

	it("changes are applied in order", ({ expect }) => {
		const str = "the quick brown fox jumps over the lazy dog";
		const changes: StringChange[] = [
			//
			{ start: 10, end: 15, before: "brown", after: "purple" },
			{ start: 4, end: 9, before: "quick", after: "slow" },
		];

		expect(spliceChangesIntoString(str, changes)).toBe(
			"the slow purple fox jumps over the lazy dog",
		);
	});
});
