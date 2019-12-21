import React from "react";
import PropTypes from "prop-types";
import "./css/booksList.css";
import EllipsisText from "react-ellipsis-text";

const BooksList = ({ books }) => {
	return (
		<ul className="list-group">
			{books.map(book => (
				<li key={book.id} className="list-group-item bookListItem">
					<div
						className="bookListCover"
						style={{ backgroundImage: `url(${book.cover})` }}
					></div>
					<a
						className="bookListItemTitle"
						href={`/books/${book.slug}`}
					>
						<EllipsisText
							className="bookListItemAuthor"
							length={35}
							text={book.title}
							tooltip={book.title}
						/>
					</a>
					<button
						type="button"
						className={`btn btn-outline-primary btn-sm bookListItemGenre genreColor${book.genre.replace(
							" ",
							""
						)}`}
					>
						{book.genre}
					</button>
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
	books: PropTypes.array.isRequired
};

export default BooksList;
