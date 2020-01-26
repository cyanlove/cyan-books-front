import React from "react";
import BooksList from "../books/BooksList";
import "./css/homePage.css";

const HomePage = () => {
	return (
		<>
			<h3 className="sectionTitle">books shelf</h3>
			<BooksList />
		</>
	);
};

export default HomePage;
