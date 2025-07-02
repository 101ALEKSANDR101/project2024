import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';
import { PageLoader } from './PageLoader';


const meta = {
	title: 'widgets/PageLoader',
	component: PageLoader,
	decorators: [themeDecorator],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof PageLoader>;

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

