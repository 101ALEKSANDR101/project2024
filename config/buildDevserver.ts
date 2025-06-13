import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";


export function buildDevserver(options: BuildOptions): DevServerConfiguration {

	return {
		open: true,
		port: options.port,
		historyApiFallback: true,
		hot: true,
	}
}