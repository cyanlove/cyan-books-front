import * as types from "./actionTypes";

export function filterByAll(match, books) {
	return { type: types.FILTER_BOOKS, match, books };
}
export function filterByTitle(match, books) {
	return { type: types.FILTER_BOOKS_BY_TITLE, match, books };
}
export function filterByAuthor(match, books) {
	return { type: types.FILTER_BOOKS_BY_AUTHOR, match, books };
}
export function filterByGenre(match, books) {
	return { type: types.FILTER_BOOKS_BY_GENRE, match, books };
}
export function filterByISBN(match, books) {
	return { type: types.FILTER_BOOKS_BY_ISBN, match, books };
}
export function setFilter(filter) {
	console.log("setFilter", filter);
	debugger;
	return { type: types.SET_FILTER, filter };
}

export function applyFilter(filter, books) {
	setFilter(filter);
	console.log("applyFilter", filter);
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
