import React, { useEffect } from "react";
import BooksList from "../books/BooksList";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./css/homePage.css";

const HomePage = ({ books, loadBooks }) => {
	useEffect(() => {
		if (
			books.length === 0 &&
			document.querySelector("#searchBox").value.length === 0
		) {
			loadBooks();
		}
	});

	return (
		<>
			<h3 className="sectionTitle">books shelf</h3>
			<BooksList books={books} />
		</>
	);
};

HomePage.propTypes = {
	books: PropTypes.array.isRequired,
	loadBooks: PropTypes.func.isRequired
};

function mapStateToProps(state /*, ownProps */) {
	return {
		books: state.books
	};
}
const mapDispatchToProps = {
	loadBooks: bookActions.loadBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
