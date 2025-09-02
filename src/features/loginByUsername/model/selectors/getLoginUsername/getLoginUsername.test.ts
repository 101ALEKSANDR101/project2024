import { StateSchema } from "app/providers/store"
import { getLoginUsername } from "./getLoginUsername";


describe('get login username', () => {
	test('username', () => {
		const state: Partial<StateSchema> = {
			//@ts-ignore
			login: {
				username: 'admin'
			}
		}

		expect(getLoginUsername(state as StateSchema)).toBe('admin');
	});

	test('empty', () => {
		const state: Partial<StateSchema> = {}

		expect(getLoginUsername(state as StateSchema)).toBe('');
	});
});