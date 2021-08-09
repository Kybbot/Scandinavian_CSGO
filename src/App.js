import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Admin, Home, Player, AllPlayers } from './pages';
import { Header, Signup, Login, PrivateRoute, ScrollToTop } from './components';
import { AuthProvider } from './context/AuthContext';

const App = () => {
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
					<Route path='/:name' component={Player} />
				</Switch>
			</AuthProvider>
		</div>
	);
};

export default App;
