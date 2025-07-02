import { Decorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';


export const routerDecorator: Decorator = Story => {

	return <MemoryRouter initialEntries={['/']}>
		<Story />
	</MemoryRouter>
};