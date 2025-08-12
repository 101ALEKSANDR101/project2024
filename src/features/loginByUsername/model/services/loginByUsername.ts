import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, userActions } from "entities/user";
import { USER_LOCAL_STORAGE_KEY } from "shared/consts/localStorageConsts";


interface AuthData {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthData, { rejectValue: string }>(
	'login/loginByUsername',
	async (AuthData, thunkAPI) => {
		try {
			const response = await axios.post('http://localhost:8000/login', AuthData);
			if (!response.data) {
				throw new Error();
			}
			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setUser(response.data));
			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue('error');
		}
	},
)