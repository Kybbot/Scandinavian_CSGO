import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import routesPath from '../routesConstants';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) =>
				currentUser && currentUser.emailVerified ? <Component {...props} /> : <Redirect to={routesPath.login} />
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
