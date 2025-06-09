import type { TailwindConfigParams } from "./config.js";
import path from "node:path";
import { createSyncFn } from "synckit";

export interface ReorderParams extends TailwindConfigParams {
	classes: string[];
}

const reorderClassesSync = createSyncFn<(options: ReorderParams) => string[]>(path.resolve(import.meta.dirname, "worker.js"));

export function reorderClasses(options: ReorderParams): string[] {
	return reorderClassesSync(options);
}
