import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import "./css/searchBox.css";

const SearchBox = ({ initFilter = "", applyFilter }) => {
	let [filter, setFilter] = useState(initFilter);

	const handleSearchChange = e => {
		handleSearchFocus(e);
		setFilter(e.target.value);
		applyFilter(e.target.value);
	};

	const handleSearchFocus = e => {
		if (e.target.value.length > 0) {
			document
				.querySelector("#searchBoxClearBtn")
				.children[0].classList.remove("invisible");
		} else {
			document
				.querySelector("#searchBoxClearBtn")
				.children[0].classList.add("invisible");
		}
	};

	const handleClearClick = () => {
		setFilter("");
		applyFilter("");

		document.querySelector("#searchBoxInput").focus();
		document
			.querySelector("#searchBoxClearBtn")
			.children[0].classList.add("invisible");
	};

	return (
		<div className="input-group mb-3" id="searchBox">
			<input
				type="text"
				id="searchBoxInput"
				value={filter}
				className="form-control border-right-0 outline-none"
				placeholder="search books..."
				aria-label="search books..."
				onChange={handleSearchChange}
				onFocus={handleSearchFocus}
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary border-left-0 border-right-0"
					style={{ borderColor: "rgb(206, 212, 218)" }}
					type="button"
					id="searchBoxClearBtn"
					onClick={handleClearClick}
				>
					<FontAwesomeIcon icon={faTimes} className="invisible" />
				</button>
			</div>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary border-left-0"
					type="button"
					id="searchBoxTriggerBtn"
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
