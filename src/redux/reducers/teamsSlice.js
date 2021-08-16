import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import byField from '../../util/byField';

const findPlayers = (state, arr) => arr.map((nickname) => state.players.find((player) => player.nickname === nickname));

const findPlayer = ({ currentMembers, pastMembers }, nickname) => {
	const player = currentMembers.find((currentMember) => currentMember.nickname === nickname);
	if (player) {
		return player;
	}
	return pastMembers.find((pastMember) => pastMember.nickname === nickname);
};

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async (country) => {
	const response = await fetch(`/teams?country=${country}`);
	const data = await response.json();

	return data;
});

export const fetchPlayers = createAsyncThunk('teams/fetchPlayers', async () => {
	const response = await fetch(`/players?_sort=team&_order=asc`);
	const data = await response.json();

	return data;
});

const teamsSlice = createSlice({
	name: 'teams',
	initialState: {
		items: [],

		team: '',
		members: {},
		showAbout: false,

		players: [],
		countedPlayers: {},
		player: {},

		loading: 'idle',
		error: null,
	},
	reducers: {
		setTeam: (state, action) => {
			state.team = action.payload;
		},
		setMembers: (state) => {
			const { members } = state.items.find((item) => item.name === state.team);

			const currentMembers = findPlayers(state, members.currentMembers);

			const pastMembers = findPlayers(state, members.pastMembers);

			const newMembers = {
				currentMembers,
				pastMembers,
			};

			state.members = newMembers;
		},
		setShowAbout: (state, action) => {
			state.showAbout = action.payload;
		},
		setPlayer: (state, action) => {
			const newPlayer = findPlayer(state.members, action.payload);

			state.player = newPlayer;
		},
		countPlayers: (state) => {
			const countedPlayers = state.players.reduce((obj, el) => {
				obj[el.country] = (obj[el.country] || 0) + 1;
				return obj;
			}, {});

			state.countedPlayers = countedPlayers;
		},
		sortCountrys: (state, action) => {
			switch (action.payload) {
				case 'asc':
					state.players.sort(byField('country', false, false));
					break;
				case 'desc':
					state.players.sort(byField('country', true, false));
					break;
				default:
					state.players.sort(byField('country', false, false));
					break;
			}
		},
		sortTeams: (state, action) => {
			switch (action.payload) {
				case 'asc':
					state.players.sort(byField('team', false, false));
					break;
				case 'desc':
					state.players.sort(byField('team', true, false));
					break;
				default:
					state.players.sort(byField('team', false, false));
					break;
			}
		},
	},
	extraReducers: {
		[fetchTeams.pending]: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[fetchTeams.fulfilled]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.items = action.payload;
			}
		},
		[fetchTeams.rejected]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.error = action.error;
			}
		},

		[fetchPlayers.pending]: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[fetchPlayers.fulfilled]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.players = action.payload;
			}
		},
		[fetchPlayers.rejected]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.error = action.error;
			}
		},
	},
});

export const { setTeam, setMembers, setShowAbout, setPlayer, countPlayers, sortCountrys, sortTeams } =
	teamsSlice.actions;

export default teamsSlice.reducer;
