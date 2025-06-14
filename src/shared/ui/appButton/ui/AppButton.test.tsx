import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from './AppButton';


describe('AppButton', () => {
	test('Render', () => {
		render(<AppButton>TEXT</AppButton>);

		expect(screen.getByText('TEXT')).toBeInTheDocument()
	});

	test('Click', () => {
		render(<AppButton theme={AppButtonTheme.CLEAR}></AppButton>);

		expect(screen.getByTestId('appButton')).toHaveClass('clear');
		screen.debug();
	});
})