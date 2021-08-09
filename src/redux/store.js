import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './reducers/teamsSlice';

export default configureStore({
	reducer: {
		teams: teamsReducer,
	},
});
