import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { LangSwitcher } from './LangSwitcher';


const meta = {
	title: 'widgets/LangSwitcher',
	component: LangSwitcher,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof LangSwitcher>;

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

