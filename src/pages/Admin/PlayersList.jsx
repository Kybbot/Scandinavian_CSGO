import React from 'react';
import PropTypes from 'prop-types';

import AddNewPlayer from './AddNewPlayer';
import AdminPlayer from './AdminPlayer';

const PlayersList = ({ data }) => (
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
			<AdminPlayer key={player.id} player={player} />
		))}
	</div>
);

PlayersList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlayersList;
