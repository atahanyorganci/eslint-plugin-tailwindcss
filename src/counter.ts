export default class Counter<T> extends Map<T, number> {
	constructor(iterable?: Iterable<T> | null) {
		super();
		if (iterable) {
			for (const item of iterable) {
				const count = this.get(item) ?? 0;
				this.set(item, count + 1);
			}
		}
	}
}
