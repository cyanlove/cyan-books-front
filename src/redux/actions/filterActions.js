import * as types from "./actionTypes";

export function filterByAll(filter, books) {
	return { type: types.FILTER_BOOKS, filter, books };
}
export function filterByTitle(filter, books) {
	return { type: types.FILTER_BOOKS_BY_TITLE, filter, books };
}
export function filterByAuthor(filter, books) {
	return { type: types.FILTER_BOOKS_BY_AUTHOR, filter, books };
}
export function filterByGenre(filter, books) {
	return { type: types.FILTER_BOOKS_BY_GENRE, filter, books };
}
export function filterByISBN(filter, books) {
	return { type: types.FILTER_BOOKS_BY_ISBN, filter, books };
}
export function setFilter(filter) {
	console.log("setFilter", filter);
	debugger;
	return { type: types.SET_FILTER, filter };
}

export function applyFilter(filter, books) {
	console.log("applyFilter", filter);

	switch (filter.settings) {
		case "title":
			return filterByTitle(filter, books);
		case "author":
			return filterByAuthor(filter, books);
		case "genre":
			return filterByGenre(filter, books);
		case "isbn":
			return filterByISBN(filter, books);
		default:
			return filterByAll(filter, books);
	}
}
