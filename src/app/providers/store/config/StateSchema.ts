import { CounterSchema } from "entities/counter";
import { UserSchema } from "entities/user";


export type StateSchema = {
	counter: CounterSchema;
	user: UserSchema;
}