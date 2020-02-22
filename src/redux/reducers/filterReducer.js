import * as types from "../actions/actionTypes";
import { matchTwoStrings } from "../../../tools/cyanUtils";
import initialState from "./initialState";

export default function filterReducer(state = initialState.filter, action) {
	//debugger;
	switch (action.type) {
		case types.SET_FILTER:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings
			};
		case types.FILTER_BOOKS:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings,
				result: action.books
					.filter(
						book =>
							matchTwoStrings(book.title, action.filter.input) ||
							matchTwoStrings(book.author, action.filter.input) ||
							matchTwoStrings(book.genre, action.filter.input) ||
							matchTwoStrings(`${book.id}`, action.filter.input)
					)
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_TITLE:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings,
				result: action.books
					.filter(book => matchTwoStrings(book.title, action.filter.input))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_AUTHOR:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings,
				result: action.books
					.filter(book => matchTwoStrings(book.author, action.filter.input))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_GENRE:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings,
				result: action.books
					.filter(book => matchTwoStrings(book.genre, action.filter.input))
					.map(book => book.id)
			};
		case types.FILTER_BOOKS_BY_ISBN:
			return {
				...state,
				input: action.filter.input,
				settings: action.filter.settings,
				result: action.books
					.filter(book => matchTwoStrings(book.id, action.filter.input))
					.map(book => book.id)
			};
		default:
			return state;
	}
}
