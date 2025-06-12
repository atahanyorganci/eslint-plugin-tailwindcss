import type { TailwindConfigParams } from "./config.js";
import path from "node:path";
import { createSyncFn } from "synckit";

export interface ReorderParams extends TailwindConfigParams {
	classes: string[];
}

export const reorderClasses = createSyncFn<(options: ReorderParams) => string[]>(path.resolve(import.meta.dirname, "reorder-classes.async.js"));
