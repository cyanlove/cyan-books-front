import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";

const GenreButton = ({ genre, applyFilter, books }) => (
	<button
		type="button"
		className={`btn btn-outline-primary btn-sm bookListItemGenre genreColor${genre.replace(
			" ",
			""
		)}`}
		onClick={() => applyFilter({ option: "genre", input: genre }, books)}
		value={genre}
	>
		{genre}
	</button>
);

GenreButton.propTypes = {
	genre: PropTypes.string.isRequired,
	applyFilter: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
};

function mapStatetoProps(state, ownprops) {
	return { genre: ownprops.genre, books: state.books };
}

const mapDispatchToProps = {
	applyFilter: filterActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(GenreButton);
