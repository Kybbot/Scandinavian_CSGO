import React from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }) => {
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
};
