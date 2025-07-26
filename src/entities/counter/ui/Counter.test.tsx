import { renderTest } from "shared/lib/tests/renderTest/renderTest"
import { Counter } from "./Counter"
import { fireEvent, screen } from "@testing-library/dom";


describe('Counter', () => {
	test('get just counter state', () => {
		renderTest(<Counter />, { initialState: { counter: { value: 10 } } });

		expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
	});

	test('increment', () => {
		renderTest(<Counter />, { initialState: { counter: { value: 10 } } });
		const btn = screen.getByTestId('Increment btn');
		fireEvent.click(btn);
		fireEvent.click(btn);
		fireEvent.click(btn);

		expect(screen.getByTestId('counterValue')).toHaveTextContent('13');
	});

	test('decrement', () => {
		renderTest(<Counter />, { initialState: { counter: { value: 10 } } });
		const btn = screen.getByTestId('Decrement btn');
		fireEvent.click(btn);
		fireEvent.click(btn);
		fireEvent.click(btn);

		expect(screen.getByTestId('counterValue')).toHaveTextContent('7');
	});
})