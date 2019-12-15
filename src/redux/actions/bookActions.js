import * as types from "./actionTypes";

export function addBookSuccess(book) {
	return { type: types.ADD_BOOK, book };
}

export function loadBooksSuccess(books) {
	return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
	return dispatch => {
		return dispatch(
			loadBooksSuccess([
				{ title: "Pol Colomo y sus amigos" },
				{ title: "Vida y Azañas de Pol Colomo" },
				{ title: "Cuando Pol Colomo entra en tu vida" },
				{ title: "¿Por qué Pol Colomo y no Juan Palomo?" },
				{ title: "Pol Colomo, solamente" }
			])
		);
	};
}
