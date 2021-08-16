import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import TeamsList from './TeamsList';
import PlayersList from './PlayersList';

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
		history.push('/login');
	};

	return (
		<div className='admin'>
			<div className='container'>
				<div className='admin__btns'>
					<Button type='button' onClick={teamsBtnHandler}>
						Teams
					</Button>
					<Button type='button' onClick={playersBtnHandler}>
						Players
					</Button>
					<Button type='button' onClick={handleLogout}>
						Log Out
					</Button>
				</div>
				{!state.isClosedTeams && <TeamsList data={teams} />}
				{!state.isClosedPlayers && <PlayersList data={players} />}
			</div>
		</div>
	);
};

export default Admin;
