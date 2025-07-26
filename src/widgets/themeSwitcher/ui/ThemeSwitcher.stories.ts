import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { ThemeSwitcher } from './ThemeSwitcher';


const meta = {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof ThemeSwitcher>;

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

