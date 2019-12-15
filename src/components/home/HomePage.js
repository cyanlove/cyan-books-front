import React, { useEffect } from "react";
import BooksList from "../books/BooksList";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const HomePage = ({ books, loadBooks }) => {
	useEffect(() => {
		if (books.length === 0) {
			loadBooks();
		}
	});

	return (
		<>
			<h1>Home Page</h1>
			<BooksList books={books} />
		</>
	);
};

HomePage.propTypes = {
	books: PropTypes.array.isRequired,
	loadBooks: PropTypes.func.isRequired,
	props: PropTypes.object
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
