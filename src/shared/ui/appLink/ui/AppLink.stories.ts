import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';
import { AppLink, AppLinkTheme } from './AppLink';


const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	decorators: [themeDecorator],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		to: '/'
	}
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.CLEAR,
	},
};

export const ClearDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.CLEAR,
	},
	parameters: {
		theme: Theme.DARK
	}
};

