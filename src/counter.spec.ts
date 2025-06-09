import { describe, expect, it } from "vitest";
import Counter from "./counter.js";

describe("counter", () => {
	it("should count elements in an array of numbers", () => {
		const counter = new Counter([1, 2, 2, 3, 3, 3]);
		expect(counter.get(1)).toBe(1);
		expect(counter.get(2)).toBe(2);
		expect(counter.get(3)).toBe(3);
		expect(counter.get(4)).toBeUndefined();
	});

	it("should count elements in an array of strings", () => {
		const counter = new Counter(["a", "b", "a", "c", "b", "a"]);
		expect(counter.get("a")).toBe(3);
		expect(counter.get("b")).toBe(2);
		expect(counter.get("c")).toBe(1);
		expect(counter.get("d")).toBeUndefined();
	});

	it("should work with empty iterable", () => {
		const counter = new Counter([]);
		expect(counter.size).toBe(0);
	});

	it("should work with no argument", () => {
		const counter = new Counter();
		expect(counter.size).toBe(0);
	});

	it("should allow manual incrementing", () => {
		const counter = new Counter(["x"]);
		counter.set("x", (counter.get("x") ?? 0) + 1);
		expect(counter.get("x")).toBe(2);
	});

	it("should work with objects as keys", () => {
		const obj1 = { a: 1 };
		const obj2 = { a: 1 };
		const counter = new Counter([obj1, obj2, obj1]);
		expect(counter.get(obj1)).toBe(2);
		expect(counter.get(obj2)).toBe(1);
	});

	it("should be iterable as a Map", () => {
		const counter = new Counter(["a", "b", "a"]);
		const entries = Array.from(counter.entries());
		expect(entries).toContainEqual(["a", 2]);
		expect(entries).toContainEqual(["b", 1]);
	});

	it("should support Map methods", () => {
		const counter = new Counter(["a", "b"]);
		counter.delete("a");
		expect(counter.has("a")).toBe(false);
		expect(counter.size).toBe(1);
	});
});
