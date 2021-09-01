import React from 'react';
import { render, screen } from '@testing-library/react';

import RotateButton from './RotateButton';

describe('RotateButton component:', () => {
	it('should render component', () => {
		render(<RotateButton />);
		const btn = screen.getByRole('button');

		expect(btn).toHaveClass('rotate-btn');
	});

	it('should render component with additionalClass', () => {
		render(<RotateButton additionalClass='light mb-2' />);
		const btn = screen.getByRole('button');

		expect(btn).toHaveClass('rotate-btn light  mb-2');
	});
});
