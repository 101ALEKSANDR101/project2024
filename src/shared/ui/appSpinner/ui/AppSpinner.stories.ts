import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';
import { AppSpinner } from './AppSpinner';


const meta = {
	title: 'shared/AppSpinner',
	component: AppSpinner,
	decorators: [themeDecorator],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof AppSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {},
};

export const ClearDark: Story = {
	args: {},
	parameters: {
		theme: Theme.DARK
	}
};

