import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import { Link } from "react-router-dom";
import GenreButton from "../genre/GenreButton";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import "./css/booksList.css";

const BooksList = ({ books, loadBooks, filter }) => {
	const [filteredBooks, setFilteredBooks] = useState([]);

	useEffect(() => {
		if (books.length === 0 && filter.config === "") {
			loadBooks();
		}

		setFilteredBooks(books.filter(book => filter.result.includes(book.id)));
	});

	return (
		<ul className="list-group">
			{filteredBooks.map(book => (
				<li key={book.id} className="list-group-item bookListItem">
					<div
						className="bookListCover"
						style={{
							backgroundImage: `url(${book.cover})`
						}}
					></div>
					<Link className="bookListItemTitle" to={`/books/${book.slug}`}>
						<EllipsisText
							className="bookListItemAuthor"
							length={35}
							text={book.title}
							tooltip={book.title}
						/>
					</Link>
					<GenreButton genre={book.genre} />
					<EllipsisText
						className="bookListItemAuthor text-secondary"
						text={book.author}
						length={70}
					/>
				</li>
			))}
		</ul>
	);
};

BooksList.propTypes = {
	books: PropTypes.array.isRequired,
	loadBooks: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired
};

function mapStateToProps(state /*, ownProps */) {
	return {
		books: state.books,
		filter: state.filter.config
	};
}
const mapDispatchToProps = {
	loadBooks: bookActions.loadBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
