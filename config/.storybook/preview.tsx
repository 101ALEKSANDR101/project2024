import type { Preview } from '@storybook/react-webpack5';
import { routerDecorator } from 'shared/config/story/decorators/routerDecorator';
import { storeDecorator } from 'shared/config/story/decorators/storeDecorator';
import { styleDecorator } from 'shared/config/story/decorators/styleDecorator';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';


const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		styleDecorator,
		themeDecorator,
		routerDecorator,
		storeDecorator,
	]
};

export default preview;