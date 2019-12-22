import * as types from "../actions/actionTypes";
import { matchTwoStrings } from "../../../tools/cyanUtils";

export default function bookReducer(state = [], action) {
	//if you check out redux docs, there are multiple ways to handle this, but switch statement is the most common
	switch (action.type) {
		case types.ADD_BOOK:
			return [...state, { ...action.book }];
		case types.LOAD_BOOKS_SUCCESS:
			return action.books.map(book => ({ ...book, match: true }));
		case types.FILTER_BOOKS:
			return state.map(book => {
				if (
					matchTwoStrings(book.title, action.match) ||
					matchTwoStrings(book.author, action.match) ||
					matchTwoStrings(book.genre, action.match) ||
					matchTwoStrings(`${book.id}`, action.match)
				) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_TITLE:
			return state.map(book => {
				if (matchTwoStrings(book.title, action.match)) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_AUTHOR:
			return state.map(book => {
				if (matchTwoStrings(book.author, action.match)) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_GENRE:
			return state.map(book => {
				if (matchTwoStrings(book.genre, action.match)) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_ISBN:
			return state.map(book => {
				if (matchTwoStrings(`${book.id}`, action.match)) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		default:
			return state;
	}
}
