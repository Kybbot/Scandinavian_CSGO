import React from 'react';

import AdminTeam from './AdminTeam';

const TeamsList = ({ data }) => {
	console.log('TeamList Rendered');
	return (
		<div className='teams-list'>
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
