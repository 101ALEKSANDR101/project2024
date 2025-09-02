import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/user';
import { createReducerManager } from './reducerManager';

export function createStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		preloadedState: initialState,
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

