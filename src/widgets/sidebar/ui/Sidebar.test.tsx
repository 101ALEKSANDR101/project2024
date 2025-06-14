import { fireEvent, screen } from "@testing-library/react"
import Sidebar from "./Sidebar"
import { renderTest } from "shared/lib/tests/renderWithRouter/renderTest";


describe('Sidebar', () => {
	test('Render', () => {
		renderTest(<Sidebar />, ['/']);

		expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
		screen.debug();
	});

	test('Collapsed click', () => {
		renderTest(<Sidebar />, ['/']);
		const btn = screen.getByTestId('sidebar-btn');
		fireEvent.click(btn);
		expect(screen.getByTestId('sidebar-test')).not.toHaveClass('collapsed');
		fireEvent.click(btn);
		expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed');
		screen.debug();
	});
})