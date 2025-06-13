

export type BuildEnv = {
	mode: BuildMode;
	port: number;
}

export type BuildMode = 'production' | 'development';

export type BuildPaths = {
	html: string;
	entry: string;
	output: string;
	src: string;
}

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}