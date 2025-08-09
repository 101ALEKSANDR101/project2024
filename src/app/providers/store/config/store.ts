import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/user';

export function createStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducer,
		preloadedState: initialState,
	});
}