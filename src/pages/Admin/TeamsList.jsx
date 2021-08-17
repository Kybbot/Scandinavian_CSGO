import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAdminTeams } from '../../redux/selectors';
import { fetchTeams } from '../../redux/reducers/adminSlice';
import AddNewTeam from './AddNewTeam';
import AdminTeam from './AdminTeam';

const TeamsList = () => {
	const data = useSelector(getAdminTeams);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!data.length) {
			dispatch(fetchTeams());
		}
	});

	return (
		<div className='admin__list'>
			<AddNewTeam />
			<div className='admin__teams-list'>
				<div>#</div>
				<div>Name</div>
				<div>Country</div>
				<div>Based</div>
				<div>WebSite</div>
				<div>Edit</div>
			</div>
			<div className='admin__teams-data'>
				{data.length && data.map((team) => <AdminTeam key={team.id} team={team} />)}
			</div>
		</div>
	);
};

export default TeamsList;
