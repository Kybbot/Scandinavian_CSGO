import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTeams = createAsyncThunk('admin/fetchTeams', async () => {
	const response = await fetch('/teams');
	const data = await response.json();

	return data;
});

export const fetchPlayers = createAsyncThunk('admin/fetchPlayers', async () => {
	const response = await fetch('/players?_sort=team&_order=asc');
	const data = await response.json();

	return data;
});

const teamsSlice = createSlice({
	name: 'admin',
	initialState: {
		teams: [],
		isClosedTeams: true,

		players: [],
		isClosedPlayers: true,

		loading: 'idle',
		error: null,
	},
	reducers: {
		openTeams: (state) => {
			state.isClosedTeams = false;
			state.isClosedPlayers = true;
		},
		openPlayers: (state) => {
			state.isClosedTeams = true;
			state.isClosedPlayers = false;
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
				state.teams = action.payload;
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

export const { openTeams, openPlayers } = teamsSlice.actions;

export default teamsSlice.reducer;
