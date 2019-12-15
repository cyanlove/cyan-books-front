import React from "react";
import PropTypes from "prop-types";

const BooksList = ({ books }) => {
	return (
		<ul className="list-group">
			{books.map(book => (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			))}
		</ul>
	);
};

BooksList.propTypes = {
	books: PropTypes.array.isRequired
};

export default BooksList;
