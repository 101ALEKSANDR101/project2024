import { StateSchema } from "app/providers/store";
import { getLoginError } from "./getLoginError";
import { LoginSchema } from "../../types/LoginSchema";


describe('get login error', () => {
	test('error', () => {
		const state: Partial<StateSchema> = {
			//@ts-ignore
			login: {
				error: 'error'
			}
		}

		expect(getLoginError(state as StateSchema)).toBe('error');
	});

	test('empty', () => {
		const state: Partial<LoginSchema> = {}

		expect(getLoginError(state as StateSchema)).toBe(undefined);
	});
});