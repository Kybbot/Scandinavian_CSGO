import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				return currentUser && currentUser.emailVerified ? (
					<Component {...props} />
				) : (
					<Redirect to='/admin/login' />
				);
			}}
		/>
	);
};

export default PrivateRoute;
