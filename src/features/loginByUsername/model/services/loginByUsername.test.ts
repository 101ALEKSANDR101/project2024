import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";


jest.mock('axios');
const axiosMocked = jest.mocked(axios);

describe('login by username', () => {
	test('login success', async () => {
		const userValue = { id: 1, username: 'admin' }
		axiosMocked.post.mockReturnValue(Promise.resolve({ data: userValue }));
		
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' })

		expect(axiosMocked.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userValue));
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('login error', async () => {
		axiosMocked.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		expect(axiosMocked.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});