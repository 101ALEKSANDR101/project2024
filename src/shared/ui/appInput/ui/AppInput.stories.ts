import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { AppInput } from './AppInput';


const meta = {
	title: 'shared/AppInput',
	component: AppInput,
	parameters: {

	},
	tags: ['autodocs'],
	argTypes: {

	},
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		placeholder: 'Text',
	},
};

export const Dark: Story = {
	args: {
		placeholder: 'Text',
	},
	parameters: {
		theme: Theme.DARK
	}
};
