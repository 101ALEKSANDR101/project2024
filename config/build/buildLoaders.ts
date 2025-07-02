import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const scssLoader = buildScssLoader(options.isDev);

	const svgrLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	return [
		tsLoader,
		scssLoader,
		svgrLoader,
		fileLoader,
	]
}