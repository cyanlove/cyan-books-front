import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";

const SearchBox = ({ initFilter = "", applyFilter }) => {
	let [filter, setFilter] = useState(initFilter);

	const handleSearch = filter => {
		setFilter(filter);
		applyFilter(filter);
	};

	return (
		<div className="input-group mb-3">
			<input
				type="text"
				id="searchBox"
				value={filter}
				className="form-control"
				placeholder="search books..."
				aria-label="search books..."
				aria-describedby="button-addon2"
				onChange={e => handleSearch(e.target.value)}
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
				>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</div>
	);
};

SearchBox.propTypes = {
	applyFilter: PropTypes.func.isRequired,
	initFilter: PropTypes.string
};

function mapStatetoProps(state /* ownProps*/) {
	return {
		initFilter: state.filter
	};
}

const mapDispatchToProps = {
	applyFilter: bookActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
