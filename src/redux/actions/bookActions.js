import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApi";

export function addBookSuccess(book) {
	return { type: types.ADD_BOOK, book };
}

export function loadBooksSuccess(books) {
	return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
	return dispatch => {
		return bookApi
			.getBooks()
			.then(books => {
				dispatch(loadBooksSuccess(books));
			})
			.catch(e => {
				//we could dispatch one other appropiate action to let the app know the request failed... but for now... lets keep it this easier way :)
				throw e;
			});
	};
}
