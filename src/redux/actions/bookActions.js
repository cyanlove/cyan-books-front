import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApi";

export function addBookSuccess(book) {
	return { type: types.ADD_BOOK, book };
}
export function loadBooksSuccess(books) {
	return { type: types.LOAD_BOOKS_SUCCESS, books };
}
export function filterByAll(match, books) {
	return { type: types.FILTER_BOOKS, match, books };
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
export function setFilter(filter) {
	return { type: types.SET_FILTER, filter };
}

export function applyFilter(filter, books) {
	setFilter(filter);

	const i = filter.indexOf(":");
	const field = i >= 0 && filter.slice(0, i);

	if (!field) return filterByAll(filter, books);

	const match = filter.slice(i + 1);

	switch (field) {
		case "title":
			return filterByTitle(match, books);
		case "author":
			return filterByAuthor(match, books);
		case "genre":
			return filterByGenre(match, books);
		case "isbn":
			return filterByISBN(match, books);
		default:
			return filterByAll(filter, books);
	}
}

export function loadBooks() {
	return dispatch => {
		return bookApi
			.getBooks()
			.then(books => {
				dispatch(loadBooksSuccess(books));
				dispatch(filterByAll("", books));
			})
			.catch(e => {
				//we could dispatch one other appropiate action to let the app know the request failed... but for now... lets keep it this easier way :)
				throw e;
			});
	};
}
