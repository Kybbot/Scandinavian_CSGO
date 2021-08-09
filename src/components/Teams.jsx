import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPlayers } from '../redux/actions/teams';
import Team from './Team';
import About from './About';

const Teams = () => {
	const dispatch = useDispatch();
	const { items, showAbout, players } = useSelector(({ teams }) => teams);

	React.useEffect(() => {
		if (!players.length) {
			dispatch(fetchPlayers());
		}
	});

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
