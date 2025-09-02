import { StateSchema } from "app/providers/store"
import { getLoginPassword } from "./getLoginPassword";


describe('get login password', () => {
	test('password', () => {
		const state: Partial<StateSchema> = {
			//@ts-ignore
			login: {
				password: '123'
			}
		}

		expect(getLoginPassword(state as StateSchema)).toBe('123');
	});

	test('empty', () => {
		const state: Partial<StateSchema> = {}

		expect(getLoginPassword(state as StateSchema)).toBe('');
	});
});