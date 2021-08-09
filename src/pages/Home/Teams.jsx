import React from 'react';
import { useSelector } from 'react-redux';

import Team from './Team';
import About from './About';

const Teams = () => {
	const { items, showAbout } = useSelector(({ teams }) => teams);

	return (
		<div className='teams'>
			<div className='container'>
				<div className='teams__row'>
					{items.length ? items.map((team) => <Team key={team.id} team={team} />) : 'Choose the country!'}
				</div>
				<div className='row'>{showAbout && <About />}</div>
			</div>
		</div>
	);
};

export default Teams;
