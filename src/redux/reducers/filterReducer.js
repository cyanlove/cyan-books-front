import * as types from "../actions/actionTypes";
import { matchTwoStrings } from "../../../tools/cyanUtils";
import initialState from "./initialState";

export default function filterReducer(state = initialState.filter, action) {
	debugger;
	switch (action.type) {
		case types.SET_FILTER:
			console.log("SET_FILTER", action.filter);
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
		case types.FILTER_BOOKS_BY_TITLE:
			return {
				...state,
				result: action.books
					.filter(book => matchTwoStrings(book.title, action.match))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_AUTHOR:
			return {
				...state,
				result: action.books
					.filter(book => matchTwoStrings(book.author, action.match))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_GENRE:
			return {
				...state,
				result: action.books
					.filter(book => matchTwoStrings(book.genre, action.match))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_ISBN:
			return {
				...state,
				result: action.books
					.filter(book => matchTwoStrings(book.id, action.match))
					.map(book => book.id)
			};
		default:
			return state;
	}
}
