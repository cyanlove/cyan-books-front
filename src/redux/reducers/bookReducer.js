import * as types from "../actions/actionTypes";
import { matchTwoStrings } from "../../../tools/cyanUtils";
import initialState from "./initialState";

export default function bookReducer(state = initialState.books, action) {
	//if you check out redux docs, there are multiple ways to handle this, but switch statement is the most common
	switch (action.type) {
		case types.ADD_BOOK:
			return [...state, { ...action.book }];
		case types.LOAD_BOOKS_SUCCESS:
			return action.books.map(book => ({ ...book, visible: true }));
		case types.FILTER_BOOKS_BY_TITLE:
			return state.map(book => ({
				...book,
				...setVisibilityProp(matchTwoStrings(book.title, action.match))
			}));
		case types.FILTER_BOOKS_BY_AUTHOR:
			return state.map(book => ({
				...book,
				...setVisibilityProp(matchTwoStrings(book.author, action.match))
			}));
		case types.FILTER_BOOKS_BY_GENRE:
			return state.map(book => ({
				...book,
				...setVisibilityProp(matchTwoStrings(book.genre, action.match))
			}));
		case types.FILTER_BOOKS_BY_ISBN:
			return state.map(book => ({
				...book,
				...setVisibilityProp(matchTwoStrings(`${book.id}`, action.match))
			}));
		default:
			return state;
	}
}

const setVisibilityProp = condition => {
	if (condition) {
		return { visible: true };
	} else {
		return { visible: false };
	}
};
