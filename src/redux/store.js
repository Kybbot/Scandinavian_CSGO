import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './reducers/teamsSlice';
import adminReducer from './reducers/adminSlice';

export default configureStore({
	reducer: {
		teams: teamsReducer,
		admin: adminReducer,
	},
});
