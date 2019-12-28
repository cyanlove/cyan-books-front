import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "./home/HomePage";
import NotFoundPage from "./404/NotFoundPage";

const App = () => (
	<>
		<Header />
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="/books" component={HomePage} exact />
			<Route component={NotFoundPage} />
		</Switch>
	</>
);

export default App;
