import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/themeProviders';
import { ThemeProvider } from 'storybook/internal/theming';


export const themeDecorator: Decorator = (storyFn, context) => {

	const theme: Theme = context.parameters.theme || Theme.LIGHT

	return <ThemeProvider theme={Theme}>
		<div className={`app ${theme}`}>
			{storyFn(context)}
		</div>
	</ThemeProvider>
};