import React from 'react';

import { PlayersList, TeamsList } from '../components';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Admin = () => {
	const [teams, setTeams] = React.useState([]);
	const [players, setPlayers] = React.useState([]);
	const [state, setState] = React.useState({
		isClosedTeams: true,
		isClosedPlayers: true,
	});

	const teamsBtnHandler = () => {
		if (!teams.length) {
			fetch('/teams')
				.then((response) => response.json())
				.then((data) => setTeams(data));
		}

		setState({
			isClosedTeams: false,
			isClosedPlayers: true,
		});
	};

	const playersBtnHandler = () => {
		if (!players.length) {
			fetch('/players?_sort=team,&_order=asc')
				.then((response) => response.json())
				.then((data) => setPlayers(data));
		}

		setState({
			isClosedTeams: true,
			isClosedPlayers: false,
		});
	};

	const { logout } = useAuth();

	const history = useHistory();

	const handleLogout = () => {
		logout();
		history.push('/admin/login');
	};

	console.log('Admin Rendered');

	return (
		<div className='admin'>
			<div className='container'>
				<div className='admin__btns'>
					<button className='btn' onClick={teamsBtnHandler}>
						Teams
					</button>
					<button className='btn' onClick={playersBtnHandler}>
						Players
					</button>
					<button className='btn' onClick={handleLogout}>
						Log Out
					</button>
				</div>
				{!state.isClosedTeams && <TeamsList data={teams} />}
				{!state.isClosedPlayers && <PlayersList data={players} />}
			</div>
		</div>
	);
};

export default Admin;
