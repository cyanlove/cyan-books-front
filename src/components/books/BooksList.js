import React from "react";
import PropTypes from "prop-types";
import "./css/booksList.css";
import EllipsisText from "react-ellipsis-text";
import { Link } from "react-router-dom";
import GenreButton from "../genre/GenreButton";

const BooksList = ({ books }) => {
	return (
		<ul className="list-group">
			{books.map(book => {
				if (book.visible)
					return (
						<li
							key={book.id}
							className="list-group-item bookListItem"
						>
							<div
								className="bookListCover"
								style={{
									backgroundImage: `url(${book.cover})`
								}}
							></div>
							<Link
								className="bookListItemTitle"
								to={`/books/${book.slug}`}
							>
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
					);
			})}
		</ul>
	);
};

BooksList.propTypes = {
	books: PropTypes.array.isRequired
};

export default BooksList;
