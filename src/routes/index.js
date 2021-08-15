import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Home, AllPlayers, Player, Admin, Login, Signup } from '../pages';
import { Header } from '../components';
import { PrivateRoute, ScrollToTop } from './components';
import { routesConstants } from '../constants';

const Routes = () => (
	<BrowserRouter>
		<Header />
		<ScrollToTop />
		<Switch>
			<Route exact path={routesConstants.home} component={Home} />
			<Route path={routesConstants.allPlayers} component={AllPlayers} />
			<Route path={routesConstants.player} component={Player} />

			<Route path={routesConstants.login} component={Login} />
			<Route path={routesConstants.signup} component={Signup} />

			<PrivateRoute path={routesConstants.admin} component={Admin} />

			<Redirect to={routesConstants.redirect} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
