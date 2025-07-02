import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';
import { themeDecorator } from 'shared/config/story/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProviders';


const meta = {
	title: 'shared/AppButton',
	component: AppButton,
	decorators: [themeDecorator],
	parameters: {

	},
	tags: ['autodocs'],
	argTypes: {

	},
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearSmall: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.S
	},
};

export const ClearSmallDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.S
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const ClearMedium: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.M
	},
};

export const ClearMediumDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.M
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const ClearLarge: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.L
	},
};

export const ClearLargeDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.CLEAR,
		size: AppButtonSize.L
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const SquareSmall: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.S
	},
};

export const SquareSmallDark: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.S
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const SquareMedium: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.M
	},
};

export const SquareMediumDark: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.M
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const SquareLarge: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.L
	},
};

export const SquareLargeDark: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.SQUARE,
		size: AppButtonSize.L
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const OutlineSmall: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.S
	},
};

export const OutlineSmallDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.S
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const OutlineMedium: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.M
	},
};

export const OutlineMediumDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.M
	},
	parameters: {
		theme: Theme.DARK
	}
};

export const OutlineLarge: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.L
	},
};

export const OutlineLargeDark: Story = {
	args: {
		children: 'Text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.L
	},
	parameters: {
		theme: Theme.DARK
	}
};
