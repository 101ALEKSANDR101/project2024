import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { AppSpinner } from './AppSpinner';


const meta = {
	title: 'shared/AppSpinner',
	component: AppSpinner,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof AppSpinner>;

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

