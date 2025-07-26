import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StateSchema } from './StateSchema';

export function createStore(initialState?: StateSchema) {
	const rootReducer = {
		counter: counterReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducer,
		preloadedState: initialState,
	});
}