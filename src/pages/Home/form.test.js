import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import teamsReducer from '../../redux/reducers/teamsSlice';

import Form from './Form';

function renderWithRedux(
	ui,
	{
		preloadedState,
		store = configureStore({ reducer: { teams: teamsReducer }, preloadedState }),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}
	return render(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('Form component:', () => {
	it('should render component', () => {
		renderWithRedux(<Form />);
		const select = screen.getByRole('combobox');

		expect(select).not.toHaveFocus();
		expect(select).toHaveValue('Sweden');

		select.focus();
		expect(select).toHaveFocus();

		userEvent.selectOptions(select, 'Denmark');
		expect(select).toHaveValue('Denmark');
	});
});
