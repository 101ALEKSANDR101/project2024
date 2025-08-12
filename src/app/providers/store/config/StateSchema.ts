import { CounterSchema } from "entities/counter";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/loginByUsername";
import { createStore } from "./store";


export type StateSchema = {
	counter: CounterSchema;
	user: UserSchema;
	login: LoginSchema;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = createStore();
export type AppDispatch = typeof store.dispatch;