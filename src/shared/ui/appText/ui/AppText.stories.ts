import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppText, AppTextTheme } from './AppText';
import { Theme } from 'app/providers/themeProviders';


const meta = {
	title: 'shared/AppText',
	component: AppText,
	parameters: {

	},
	tags: ['autodocs'],
	argTypes: {

	},
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		title: 'Text',
		text: 'Text',
	},
};

export const TextDark: Story = {
	args: {
		title: 'Text',
		text: 'Text',
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const TextError: Story = {
	args: {
		title: 'Text',
		text: 'Text',
		theme: AppTextTheme.ERROR
	},
};

export const TextErrorDark: Story = {
	args: {
		title: 'Text',
		text: 'Text',
		theme: AppTextTheme.ERROR
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const OnlyText: Story = {
	args: {
		text: 'Text',
	},
};

export const OnlyTextDark: Story = {
	args: {
		text: 'Text',
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const OnlyTitle: Story = {
	args: {
		title: 'Text',
	},
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Text',
	},
	parameters: {
		theme: Theme.DARK
	}
};