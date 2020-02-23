import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";
import Button from "react-bootstrap/Button";

const GenreButton = ({ genre, applyFilter, books }) => (
	<Button
		variant="outline-primary"
		size="sm"
		className={`bookListItemGenre genreColor${genre.replace(" ", "")}`}
		onClick={() => applyFilter({ option: "genre", input: genre }, books)}
	>
		{genre}
	</Button>
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
