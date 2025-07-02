import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';
import { PageError } from './PageError';


const meta = {
	title: 'widgets/PageError',
	component: PageError,
	decorators: [themeDecorator],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof PageError>;

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

