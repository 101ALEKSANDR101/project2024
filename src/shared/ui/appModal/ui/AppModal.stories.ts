import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { AppModal } from './AppModal';


const meta = {
	title: 'shared/AppModal',
	component: AppModal,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		onOpen: true,
		children: 'lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem'
	}
};

export const Dark: Story = {
	args: {
		onOpen: true,
		children: 'lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem'
	},
	parameters: {
		theme: Theme.DARK
	}
};

