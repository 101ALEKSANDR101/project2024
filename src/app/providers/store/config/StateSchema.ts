import { CounterSchema } from "entities/counter";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/loginByUsername";
import { createStore } from "./store";
import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/profile";


export type StateSchema = {
	counter: CounterSchema;
	user: UserSchema;

	login?: LoginSchema;
	profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type ReducerManager = {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = createStore();
export type AppDispatch = typeof store.dispatch;