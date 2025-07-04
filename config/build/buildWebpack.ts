import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildDevserver } from "./buildDevserver";


export function buildWebpack(options: BuildOptions): webpack.Configuration {

	return {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			filename: '[name][contenthash:5].js',
			path: options.paths.output,
			clean: true,
		},
		performance: {
			maxAssetSize: 300000,
			assetFilter: (asset: string) => {
				return asset.match(options.paths.entry);
			}
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevserver(options) : undefined,
	}
}