export const Types = {
	SET_PLAYERS: 'ALLPLAYERS@SET_PLAYERS',
	COUNT_PLAYERS: 'ALLPLAYERS@COUNT_PLAYERS',
	SET_COUNTRY: 'ALLPLAYERS@SET_COUNTRY',
	SORT_COUNTRYS: 'ALLPLAYERS@SORT_COUNTRYS',
	SORT_TEAMS: 'ALLPLAYERS@SORT_TEAMS',
};

export const setPlayers = (item) => ({
	type: Types.SET_PLAYERS,
	payload: item,
});

export const countPlayers = () => ({
	type: Types.COUNT_PLAYERS,
});

export const sortCountrys = (payload) => ({
	type: Types.SORT_COUNTRYS,
	payload,
});

export const sortTeams = (payload) => ({
	type: Types.SORT_TEAMS,
	payload,
});

export const fetchPlayers = () => (dispatch) => {
	fetch(`/players?_sort=team&_order=asc`)
		.then((response) => response.json())
		.then((data) => {
			dispatch(setPlayers(data));
			dispatch(countPlayers());
		});
};
