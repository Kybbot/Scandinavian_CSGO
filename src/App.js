import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Admin, Home, Player, AllPlayers } from './pages';
import { Header, Signup, Login, PrivateRoute, ScrollToTop } from './components';
import { AuthProvider } from './context/AuthContext';
import { fetchPlayers } from './redux/reducers/teamsSlice';

const App = () => {
	const dispatch = useDispatch();
	const { players } = useSelector(({ teams }) => teams);

	React.useEffect(() => {
		if (!players.length) {
			dispatch(fetchPlayers());
		}
	}, [dispatch, players.length]);

	return (
		<div className='App'>
			<Header />
			<ScrollToTop />
			<AuthProvider>
				<Switch>
					<Route exact path='/' component={Home} />
					<PrivateRoute exact path='/admin' component={Admin} />
					<Route path='/admin/signup' component={Signup} />
					<Route path='/admin/login' component={Login} />
					<Route path='/allPlayers' component={AllPlayers} />
					<Route path='/player/:name' component={Player} />
				</Switch>
			</AuthProvider>
		</div>
	);
};

export default App;
