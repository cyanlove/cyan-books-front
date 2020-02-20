import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

//We have a default inital state for our reducers,
//but this will take an inital state from our server and this (app init) is a good place to do it.
const store = configureStore();

render(
	<ReduxProvider store={store}>
		<Router>
			<App />
		</Router>
	</ReduxProvider>,
	document.getElementById("app")
);
