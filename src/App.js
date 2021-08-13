import React from 'react';
import { useDispatch } from 'react-redux';

import Routes from './routes';
import AuthProvider from './context/AuthContext';
import { fetchPlayers } from './redux/reducers/teamsSlice';

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchPlayers());
	}, [dispatch]);

	return (
		<div className='App'>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</div>
	);
};

export default App;
