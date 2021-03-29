import { c } from '../constants';

const initialState = {
	items: [],

	members: {},
	team: '',
	showAbout: false,

	players: [],
	player: {},
};

const findPlayers = (state, arr) =>
	arr.map((nickname) =>
		state.players.find((player) => player.nickname === nickname)
	);

const findPlayer = ({ currentMembers, pastMembers }, nickname) => {
	let player = currentMembers.find((player) => player.nickname === nickname);
	if (player) {
		return player;
	} else {
		return pastMembers.find((player) => player.nickname === nickname);
	}
};

const teams = (state = initialState, action) => {
	switch (action.type) {
		case c.SET_TEAMS:
			return {
				...state,
				items: action.payload,
			};

		case c.SET_TEAM:
			return {
				...state,
				team: action.payload,
			};

		case c.SET_MEMBERS: {
			const { members } = state.items.find((item) => item.name === state.team);

			const currentMembers = findPlayers(state, members.currentMembers);

			const pastMembers = findPlayers(state, members.pastMembers);

			const newMembers = {
				currentMembers,
				pastMembers,
			};

			return {
				...state,
				members: newMembers,
			};
		}
		case c.SET_SHOW_ABOUT:
			return {
				...state,
				showAbout: action.payload,
			};

		case c.SET_PLAYERS:
			return {
				...state,
				players: action.payload,
			};

		case c.FIND_PLAYER: {
			const newPlayer = findPlayer(state.members, action.payload);

			return {
				...state,
				player: newPlayer,
			};
		}

		default:
			return state;
	}
};

export default teams;
