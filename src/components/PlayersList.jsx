import React from 'react';

import AddNewPlayer from './AddNewPlayer';
import AdminPlayer from './AdminPlayer';

const PlayersList = ({ data }) => {
	console.log('PlayersList Rendered');
	return (
		<div className='players-list'>
			<AddNewPlayer />
			<div className='players-list__info'>
				<div>#</div>
				<div>Nickname</div>
				<div>Name</div>
				<div>Age</div>
				<div>Country</div>
				<div>Team</div>
				<div>Edit</div>
			</div>
			{data.map((player) => (
				<AdminPlayer key={player.id} {...player} />
			))}
		</div>
	);
};

export default PlayersList;
