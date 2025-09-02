import { StateSchema } from "app/providers/store";
import { getLoginIsLoading } from "./getLoginIsLoading";


describe('get login is loading', () => {
	test('true', () => {
		const state: Partial<StateSchema> = {
			//@ts-ignore
			login: {
				isLoading: true
			}
		}

		expect(getLoginIsLoading(state as StateSchema)).toBe(true);
	});

	test('empty', () => {
		const state: Partial<StateSchema> = {}

		expect(getLoginIsLoading(state as StateSchema)).toBe(false);
	});
});