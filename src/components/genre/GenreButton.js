import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";

const GenreButton = ({ genre, applyFilter, setFilter, books }) => {
	const handleGenreClick = e => {
		applyFilter(`genre:${e.target.value}`, books);
		setFilter(`genre:${e.target.value}`);

		const searchBox = document.querySelector("#searchBoxInput");
		searchBox.value = `genre:${e.target.value}`;
	};

	return (
		<button
			type="button"
			className={`btn btn-outline-primary btn-sm bookListItemGenre genreColor${genre.replace(
				" ",
				""
			)}`}
			onClick={handleGenreClick}
			value={genre}
		>
			{genre}
		</button>
	);
};

GenreButton.propTypes = {
	genre: PropTypes.string.isRequired,
	applyFilter: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired,
	setFilter: PropTypes.func.isRequired
};

function mapStatetoProps(state, ownprops) {
	return { genre: ownprops.genre, books: state.books };
}

const mapDispatchToProps = {
	applyFilter: filterActions.applyFilter,
	setFilter: filterActions.setFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(GenreButton);
