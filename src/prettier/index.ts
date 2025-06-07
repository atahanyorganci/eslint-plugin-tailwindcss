import type { TailwindConfigParams } from "./config.js";
import { createSyncFn } from "synckit";

export interface ReorderParams extends TailwindConfigParams {
	classes: string[];
}

const reorderClassesSync = createSyncFn<(options: ReorderParams) => string[]>(import.meta.resolve("./worker.js"));

export function reorderClasses(options: ReorderParams): string[] {
	return reorderClassesSync(options);
}
