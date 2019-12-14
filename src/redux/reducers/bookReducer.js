export default function bookReducer(state = [], action) {
	//if you check out redux docs, there are multiple ways to handle this, but switch statement is the most common
	switch (action.type) {
		case "ADD_BOOK":
			return [...state, { ...action.book }];

		default:
			return state;
	}
}
