//we'll call this at the app entry point. This way the store'll get configured our app starts up
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore(initialState) {
	//add support for redux dev tools (browser)
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	//redux middleware is a way to enhance Redux's behavior.
	//Just like help with async calls or force immutable state (safety net)
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
	);
}

export default configureStore;
