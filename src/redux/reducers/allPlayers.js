import { byField } from '../../util/byField';
import { Types } from '../actions/allPlayers';

const initialState = {
	items: [],
	countedPlayers: {},
};

const allPlayers = (state = initialState, action) => {
	switch (action.type) {
		case Types.SET_PLAYERS:
			return {
				...state,
				items: action.payload,
			};

		case Types.COUNT_PLAYERS: {
			const countedPlayers = state.items.reduce(function (obj, el) {
				obj[el.country] = (obj[el.country] || 0) + 1;
				return obj;
			}, {});

			return {
				...state,
				countedPlayers,
			};
		}

		case Types.SORT_COUNTRYS: {
			let newItems = [];
			switch (action.payload) {
				case 'asc':
					newItems = state.items.sort(byField('country', false, false));
					break;
				case 'desc':
					newItems = state.items.sort(byField('country', true, false));
					break;
				default:
					newItems = state.items.sort(byField('country', false, false));
					break;
			}

			return {
				...state,
				items: newItems,
			};
		}
		case Types.SORT_TEAMS: {
			let newItems = [];
			switch (action.payload) {
				case 'asc':
					newItems = state.items.sort(byField('team', false, false));
					break;
				case 'desc':
					newItems = state.items.sort(byField('team', true, false));
					break;
				default:
					newItems = state.items.sort(byField('team', false, false));
					break;
			}

			return {
				...state,
				items: newItems,
			};
		}

		default:
			return state;
	}
};

export default allPlayers;
