import React from 'react';
import PropTypes from 'prop-types';

import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => React.useContext(AuthContext);

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = React.useState();
	const [loading, setLoading] = React.useState(true);

	const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

	const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

	const logout = () => auth.signOut();

	React.useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AuthProvider;
