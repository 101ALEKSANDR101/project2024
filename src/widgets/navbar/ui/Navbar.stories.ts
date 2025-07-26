import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import Navbar from './Navbar';


const meta = {
	title: 'widgets/Navbar',
	component: Navbar,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof Navbar>;

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

