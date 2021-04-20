import React from 'react';

import AddNewTeam from './AddNewTeam';
import AdminTeam from './AdminTeam';

const TeamsList = ({ data }) => {
	return (
		<div className='teams-list'>
			<AddNewTeam />
			<div className='teams-list__info'>
				<div>#</div>
				<div>Name</div>
				<div>Country</div>
				<div>Based</div>
				<div>WebSite</div>
				<div>Edit</div>
			</div>
			{data.map((team) => (
				<AdminTeam key={team.id} {...team} />
			))}
		</div>
	);
};

export default TeamsList;
