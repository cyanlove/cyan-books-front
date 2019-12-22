import * as types from "../actions/actionTypes";

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
					book.title.toLowerCase().indexOf(action.match) > -1 ||
					book.author.toLowerCase().indexOf(action.match) > -1 ||
					book.genre.toLowerCase().indexOf(action.match) > -1 ||
					`${book.id}`.toLowerCase().indexOf(action.match) > -1
				) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_TITLE:
			return state.map(book => {
				if (book.title.toLowerCase().indexOf(action.match) > -1) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_AUTHOR:
			return state.map(book => {
				if (book.author.toLowerCase().indexOf(action.match) > -1) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_GENRE:
			return state.map(book => {
				if (book.genre.toLowerCase().indexOf(action.match) > -1) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		case types.FILTER_BOOKS_BY_ISBN:
			return state.map(book => {
				if (`${book.id}`.indexOf(action.match) > -1) {
					return { ...book, match: true };
				} else {
					return { ...book, match: false };
				}
			});
		default:
			return state;
	}
}
