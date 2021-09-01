import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAdminIsClosedTeams, getAdminIsClosedPlayers } from '../../redux/selectors';
import { openTeams, openPlayers } from '../../redux/reducers/adminSlice';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components';
import TeamsList from './TeamsList';
import PlayersList from './PlayersList';

const Admin = () => {
	const isClosedTeams = useSelector(getAdminIsClosedTeams);
	const isClosedPlayers = useSelector(getAdminIsClosedPlayers);

	const dispatch = useDispatch();

	const teamsBtnHandler = () => {
		dispatch(openTeams());
	};

	const playersBtnHandler = () => {
		dispatch(openPlayers());
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
				{!isClosedTeams && <TeamsList />}
				{!isClosedPlayers && <PlayersList />}
			</div>
		</div>
	);
};

export default Admin;
