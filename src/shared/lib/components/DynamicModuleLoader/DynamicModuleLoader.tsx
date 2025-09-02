import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey, StoreWithReducerManager } from "app/providers/store";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";


export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducersListEntryes = [StateSchemaKey, Reducer];

type DynamicModuleLoaderProps = {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
	const {
		children,
		reducers,
		removeAfterUnmount,
	} = props;

	const store = useStore() as StoreWithReducerManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntryes) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntryes) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY` });
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{children}
		</>
	)
}