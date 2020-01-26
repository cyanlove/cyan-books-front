import * as types from "../actions/actionTypes";
import { matchTwoStrings } from "../../../tools/cyanUtils";
import initialState from "./initialState";

export default function filterReducer(state = initialState.filter, action) {
	switch (action.type) {
		case types.SET_FILTER:
			return { ...state, config: action.filter };
		case types.FILTER_BOOKS:
			return {
				...state,
				result: action.books
					.filter(
						book =>
							matchTwoStrings(book.title, action.match) ||
							matchTwoStrings(book.author, action.match) ||
							matchTwoStrings(book.genre, action.match) ||
							matchTwoStrings(`${book.id}`, action.match)
					)
					.map(book => book.id)
			};
		default:
			return state;
	}
}
