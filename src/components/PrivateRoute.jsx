import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) =>
				currentUser && currentUser.emailVerified ? <Component {...props} /> : <Redirect to='/admin/login' />
			}
		/>
	);
};

export default PrivateRoute;
