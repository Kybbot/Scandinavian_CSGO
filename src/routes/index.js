import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Home, AllPlayers, Player, Admin, Login, Signup } from '../pages';
import { Header } from '../components';
import { PrivateRoute, ScrollToTop } from './components';
import routesPath from './routesConstants';

const Routes = () => (
	<BrowserRouter>
		<Header />
		<ScrollToTop />
		<Switch>
			<Route exact path={routesPath.home} component={Home} />
			<Route path={routesPath.allPlayers} component={AllPlayers} />
			<Route path={routesPath.player} component={Player} />

			<Route path={routesPath.login} component={Login} />
			<Route path={routesPath.signup} component={Signup} />

			<PrivateRoute path={routesPath.admin} component={Admin} />

			<Redirect to={routesPath.redirect} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
