import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApi";

export function addBookSuccess(book) {
	return { type: types.ADD_BOOK, book };
}
export function loadBooksSuccess(books) {
	return { type: types.LOAD_BOOKS_SUCCESS, books };
}
export function filterByAll(match) {
	return { type: types.FILTER_BOOKS, match };
}
export function filterByTitle(match) {
	return { type: types.FILTER_BOOKS_BY_TITLE, match };
}
export function filterByAuthor(match) {
	return { type: types.FILTER_BOOKS_BY_AUTHOR, match };
}
export function filterByGenre(match) {
	return { type: types.FILTER_BOOKS_BY_GENRE, match };
}
export function filterByISBN(match) {
	return { type: types.FILTER_BOOKS_BY_ISBN, match };
}

export function applyFilter(filter) {
	const i = filter.indexOf(":");
	const field = i >= 0 && filter.slice(0, i);

	if (!field) return filterByAll(filter);

	const match = filter.slice(i + 1);

	switch (field) {
		case "title":
			return filterByTitle(match);
		case "author":
			return filterByAuthor(match);
		case "genre":
			return filterByGenre(match);
		case "isbn":
			return filterByISBN(match);
		default:
			return filterByAll(filter);
	}
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
