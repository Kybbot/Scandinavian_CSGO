import React from 'react';
import { useDispatch } from 'react-redux';
import { setTeam, setShowAbout, setMembers } from '../redux/actions/teams';

const img = 'data/teams-img/';

const Team = React.memo(({ team }) => {
	const dispatch = useDispatch();

	const click = (event) => {
		let teamName = event.target.getAttribute('data-name');
		dispatch(setTeam(teamName));
		dispatch(setMembers());
		dispatch(setShowAbout(true));
	};

	return (
		<div className='team' data-name={team.name} onClick={click}>
			<img src={img + team.logo} alt={team.name} data-name={team.name} />
			<div
				className='team__info'
				data-name={team.name}>{`${team.name} - ${team.based}`}</div>
		</div>
	);
});

export default Team;
