import { lazy } from 'react';

export const LoginFormLazy = lazy(() => new Promise((resolve) => {
	//@ts-ignore
	setTimeout(() => { resolve(import('./LoginForm')) }, 1500);
})); 