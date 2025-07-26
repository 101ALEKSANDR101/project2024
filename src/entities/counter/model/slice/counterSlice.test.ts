import { CounterSchema } from "../types/CounterSchema"
import { counterActions, counterReducer } from "./counterSlice";


describe('counterSlice', () => {
	test('decrement', () => {
		const initialState: CounterSchema = {
			value: 10
		}
		expect(counterReducer(initialState, counterActions.decrement())).toEqual({value: 9});
	});

	test('increment', () => {
		const initialState: CounterSchema = {
			value: 10
		}
		expect(counterReducer(initialState, counterActions.increment())).toEqual({value: 11});
	});

	test('empty state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1});
	});
});