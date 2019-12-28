import React from "react";
import Header from "./header/Header";
import HomePage from "./home/HomePage";
import { Route, Switch } from "react-router-dom";

const App = () => (
	<>
		<Header />
		<Switch>
			<Route path="/" component={HomePage} exact />
		</Switch>
	</>
);

export default App;
