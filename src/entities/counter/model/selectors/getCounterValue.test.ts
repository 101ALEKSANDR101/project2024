import { StateSchema } from "app/providers/store";
import { getCounterValue } from "./getCounterValue";


describe('Counter', () => {
	test('return counter value', () => {
		const state: StateSchema = {
			counter: { value: 10 }
		}

		expect(getCounterValue(state)).toEqual(10);
	});
});