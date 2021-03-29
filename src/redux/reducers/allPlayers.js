import { Types } from '../actions/allPlayers';

const initialState = {
	items: [],
	countedPlayers: {},
};

var byField = function (field, reverse, primer) {
	var key = primer
		? function (x) {
				return primer(x[field]);
		  }
		: function (x) {
				return x[field];
		  };

	reverse = !reverse ? 1 : -1;

	return function (a, b) {
		return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
	};
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
