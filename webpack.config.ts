import path from 'path';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpack } from './config/build/buildWebpack';


export default (env: BuildEnv) => {

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const mode = env.mode || 'development';

	const isDev = mode === 'development';

	const port = env.port || 5000;

	const config = buildWebpack({
		mode,
		paths,
		isDev,
		port
	});

	return config;
};