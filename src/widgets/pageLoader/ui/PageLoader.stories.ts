import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/themeProviders';
import { PageLoader } from './PageLoader';


const meta = {
	title: 'widgets/PageLoader',
	component: PageLoader,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof PageLoader>;

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

