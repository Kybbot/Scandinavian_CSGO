import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../components';
import { fetchTeams, setShowAbout } from '../../redux/reducers/teamsSlice';

const countrys = ['Sweden', 'Denmark', 'Finland', 'Mix'];

const Form = () => {
	const dispatch = useDispatch();

	const [country, setCountry] = React.useState('Sweden');

	const changeSelectHandler = (event) => {
		setCountry(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(setShowAbout(false));
		dispatch(fetchTeams(country));
	};

	return (
		<div className='country-form'>
			<div className='container'>
				<div className='column'>
					<form className='form' onSubmit={submitHandler}>
						<div className='form__group'>
							<select className='form__control' value={country} onChange={changeSelectHandler}>
								{countrys.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
							<Button type='submit'>Submit</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
