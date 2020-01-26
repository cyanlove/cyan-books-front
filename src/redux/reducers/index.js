import { combineReducers } from "redux";
import books from "./bookReducer";
import filter from "./filterReducer";

const rootReducer = combineReducers({
	books,
	filter
});

export default rootReducer;
