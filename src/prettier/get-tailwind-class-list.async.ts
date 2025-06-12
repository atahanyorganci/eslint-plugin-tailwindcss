import type { ReorderParams } from "./index.js";
import { runAsWorker } from "synckit";
import { getTailwindConfig } from "./config.js";

runAsWorker(async ({ classes, ...options }: ReorderParams) => {
	const config = await getTailwindConfig(options);
	const classList = config.getClassList();
	return classList;
});
