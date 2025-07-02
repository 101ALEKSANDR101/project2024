import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';


const config: StorybookConfig = {
	stories: [
		"../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-docs"
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {}
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	webpackFinal: async (config, { configType }) => {
		config.resolve.extensions.push('.ts', '.tsx');
		config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
		config.module.rules.push(buildScssLoader(true));
		
		const imageRule = config.module?.rules?.find((rule) => {
			if (typeof rule === 'object' && rule !== null && 'test' in rule) {
				return rule.test instanceof RegExp && rule.test.test('.svg');
			}
			return false;
		});

		if (imageRule && typeof imageRule === 'object' && imageRule !== null) {
			imageRule.exclude = /\.svg$/;
		}

		// Add @svgr/webpack rule
		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
export default config;


