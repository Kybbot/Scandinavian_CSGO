import { combineReducers } from 'redux';
import teams from './teams';
import allPlayers from './allPlayers';

const rootReducer = combineReducers({
	teams,
	allPlayers,
});

export default rootReducer;
