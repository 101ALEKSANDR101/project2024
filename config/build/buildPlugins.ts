import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";


export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {

	return [
		new HtmlWebpackPlugin({
			template: options.paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name][contenthash:5].css',
			chunkFilename: 'css/[name][contenthash:5].css'
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	]
}