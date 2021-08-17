import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAdminPlayers } from '../../redux/selectors';
import { fetchPlayers } from '../../redux/reducers/adminSlice';
import AddNewPlayer from './AddNewPlayer';
import AdminPlayer from './AdminPlayer';

const PlayersList = () => {
	const data = useSelector(getAdminPlayers);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!data.length) {
			dispatch(fetchPlayers());
		}
	});

	console.log('PlayersList');
	return (
		<div className='admin__list'>
			<AddNewPlayer />
			<div className='admin__players-list'>
				<div>#</div>
				<div>Nickname</div>
				<div>Name</div>
				<div>Age</div>
				<div>Country</div>
				<div>Team</div>
				<div>Edit</div>
			</div>
			<div className='admin__players-data'>
				{data.map((player) => (
					<AdminPlayer key={player.id} player={player} />
				))}
			</div>
		</div>
	);
};

export default PlayersList;
