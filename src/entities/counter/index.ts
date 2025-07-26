import { Counter } from "./ui/Counter";
import type { CounterSchema } from './model/types/CounterSchema';
import { counterActions, counterReducer } from "./model/slice/counterSlice";


export { Counter, CounterSchema, counterReducer, counterActions }