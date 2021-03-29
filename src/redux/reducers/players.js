import { c } from '../constants';

const initialState = {
	items: [],
	player: {},
};

const players = (state = initialState, action) => {
	switch (action.type) {
		case c.SET_PLAYERS:
			return {
				...state,
				items: action.payload,
			};
		case c.FIND_PLAYER:
			const item = state.items.find((item) => item.nickname === action.payload);
			return {
				...state,
				player: item,
			};
		default:
			return state;
	}
};

export default players;
