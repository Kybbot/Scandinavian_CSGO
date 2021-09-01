import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component:', () => {
	it('should render component', () => {
		render(<Button>text</Button>);
		const btn = screen.getByRole('button');

		expect(btn).toHaveClass('btn');
		expect(btn).toHaveTextContent('text');
	});

	it('should render component with additionalClass', () => {
		render(<Button additionalClass='light mb-2'>text</Button>);
		const btn = screen.getByRole('button');

		expect(btn).toHaveClass('btn light  mb-2');
		expect(btn).toHaveTextContent('text');
	});
});
