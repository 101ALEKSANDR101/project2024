import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";


describe('loginSlice', () => {
	test('set username', () => {
		const initialState: Partial<LoginSchema> = {
			username: ''
		}

		expect(loginReducer(initialState as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
	});

	test('set password', () => {
		const initialState: Partial<LoginSchema> = {
			password: ''
		}

		expect(loginReducer(initialState as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
	});
});