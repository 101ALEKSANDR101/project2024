import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { LoginForm } from './LoginForm';


const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	parameters: {

	},
	tags: ['autodocs'],
	argTypes: {

	},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
	},
};

export const Dark: Story = {
	args: {
	},
	parameters: {
		theme: Theme.DARK
	}
};
