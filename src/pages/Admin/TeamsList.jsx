import React from 'react';
import PropTypes from 'prop-types';

import AddNewTeam from './AddNewTeam';
import AdminTeam from './AdminTeam';

const TeamsList = ({ data }) => (
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
			<AdminTeam key={team.id} team={team} />
		))}
	</div>
);

TeamsList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeamsList;
