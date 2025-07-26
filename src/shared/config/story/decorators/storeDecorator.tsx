import { Decorator } from '@storybook/react';
import { createStore } from 'app/providers/store';
import { Provider } from 'react-redux';


export const storeDecorator: Decorator = (storyFn, context) => {
	const store = createStore();

	return <Provider store={store}>
		{storyFn(context)}
	</Provider>
};