import { c } from '../constants';

export const setPlayers = (item) => ({
	type: c.SET_PLAYERS,
	payload: item,
});

export const findPlayer = (name) => ({
	type: c.FIND_PLAYER,
	payload: name,
});

export const fetchPlayers = () => (dispatch) => {
	fetch(`/players`)
		.then((response) => response.json())
		.then((data) => dispatch(setPlayers(data)));
};
