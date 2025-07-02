import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/themeProviders';


export const themeDecorator: Decorator = (storyFn, context) => {

	const theme: Theme = context.parameters.theme || Theme.LIGHT

	return <div className={`app ${theme}`}>
		{storyFn(context)}
	</div>
};