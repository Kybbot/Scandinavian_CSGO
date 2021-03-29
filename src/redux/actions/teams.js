import { c } from '../constants';

export const setLoaded = (payload) => ({
	type: c.SET_LOADED,
	payload,
});

export const setTeams = (items) => ({
	type: c.SET_TEAMS,
	payload: items,
});

export const setTeam = (team) => ({
	type: c.SET_TEAM,
	payload: team,
});

export const setShowAbout = (payload) => ({
	type: c.SET_SHOW_ABOUT,
	payload,
});

export const setMembers = () => ({
	type: c.SET_MEMBERS,
});

export const fetchTeams = (country) => (dispatch) => {
	fetch(`/teams?country=${country}`)
		.then((response) => response.json())
		.then((data) => dispatch(setTeams(data)));
};

export const setPlayers = (item) => ({
	type: c.SET_PLAYERS,
	payload: item,
});

export const findPlayer = (name) => ({
	type: c.FIND_PLAYER,
	payload: name,
});

export const fetchPlayers = () => (dispatch) => {
	fetch(`/players?_sort=team&_order=asc`)
		.then((response) => response.json())
		.then((data) => dispatch(setPlayers(data)));
};
