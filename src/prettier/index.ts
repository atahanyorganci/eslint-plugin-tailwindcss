import type { DesignSystem } from "./config.js";

function bigSign(bigIntValue: bigint) {
	return Number(bigIntValue > 0n) - Number(bigIntValue < 0n);
}

export function reorderClasses(config: DesignSystem, classList: string[]) {
	const orderedClasses = config.getClassOrder(classList);

	return orderedClasses
		.sort(([nameA, a], [nameZ, z]) => {
		// Move `...` to the end of the list
			if (nameA === "..." || nameA === "…") {
				return 1;
			}
			if (nameZ === "..." || nameZ === "…") {
				return -1;
			}

			if (a === z) {
				return 0;
			}
			if (a === null) {
				return -1;
			}
			if (z === null) {
				return 1;
			}
			return bigSign(a - z);
		})
		.map(([className]) => className);
}
