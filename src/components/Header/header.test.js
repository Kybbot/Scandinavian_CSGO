import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header component:', () => {
	it('should render component', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		const h1 = screen.getByRole('heading', { level: 1 });

		expect(h1).toBeInTheDocument();
	});
});
