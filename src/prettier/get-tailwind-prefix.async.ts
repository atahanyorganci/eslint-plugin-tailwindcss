import type { ReorderParams } from "./index.js";
import { runAsWorker } from "synckit";
import { getTailwindConfig } from "./config.js";

runAsWorker(async ({ classes, ...options }: ReorderParams) => {
	const { theme: { prefix } } = await getTailwindConfig(options);
	return prefix ?? undefined;
});
