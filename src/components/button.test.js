import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component:', () => {
	it('should render component', () => {
		render(<Button>btn</Button>);
		const btn = screen.getByRole('button');

		expect(btn).toHaveClass('btn');
	});
});
