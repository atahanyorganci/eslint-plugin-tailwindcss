import type { ReorderParams } from "./index.js";
import { runAsWorker } from "synckit";
import { getTailwindConfig } from "./config.js";
import { reorderClassesAsync } from "./order.js";

runAsWorker(async ({ classes, ...options }: ReorderParams) => {
	const config = await getTailwindConfig(options);
	const reordered = reorderClassesAsync(config, classes);
	return reordered;
});
