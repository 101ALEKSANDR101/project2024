import { StateSchema } from "app/providers/store";


export const getCounterValue = (state: StateSchema) => state.counter.value;