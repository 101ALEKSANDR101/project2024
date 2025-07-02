import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';
import MainPage from './MainPage';


const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	decorators: [themeDecorator],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	parameters: {
		theme: Theme.DARK
	}
};

