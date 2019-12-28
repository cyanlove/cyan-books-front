import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";

const GenreButton = ({ genre, applyFilter }) => {
	const handleGenreClick = e => {
		applyFilter(e.target.value);

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
	applyFilter: PropTypes.func.isRequired
};

function mapStatetoProps(state, ownprops) {
	return { genre: ownprops.genre };
}

const mapDispatchToProps = {
	applyFilter: bookActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(GenreButton);
