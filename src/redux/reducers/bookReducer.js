import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookReducer(state = initialState.books, action) {
	//if you check out redux docs, there are multiple ways to handle this, but switch statement is the most common
	switch (action.type) {
		case types.ADD_BOOK:
			return [...state, { ...action.book }];
		case types.LOAD_BOOKS_SUCCESS:
			return action.books;
		default:
			return state;
	}
}
