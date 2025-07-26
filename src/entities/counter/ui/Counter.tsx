import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";


export const Counter = () => {
	const count = useSelector(getCounterValue);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button
					data-testid="Increment btn"
					onClick={() => dispatch(counterActions.increment())}
				>
					Increment
				</button>
				<span data-testid='counterValue'>{count}</span>
				<button
					data-testid="Decrement btn"
					onClick={() => dispatch(counterActions.decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}