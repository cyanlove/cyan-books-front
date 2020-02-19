import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";
import SearchConfig from "./searchConfig/SearchConfig";
import "./css/searchBox.css";

const SearchBox = ({ filter = "", applyFilter, books }) => {
	console.log("filter", filter);
	const handleSearchChange = e => {
		handleSearchFocus(e);
		applyFilter(e.target.value, books);
	};

	const handleSearchFocus = e => {
		if (e.target.value.length > 0) {
			/* document
				.querySelector("#searchBoxClearBtn")
				.children[0].classList.remove("invisible"); */
		} else {
			/* document
				.querySelector("#searchBoxClearBtn")
				.children[0].classList.add("invisible"); */
		}
	};

	const handleClearClick = () => {
		applyFilter("", books);

		//document.querySelector("#searchBoxInput").focus();
		/* document
			.querySelector("#searchBoxClearBtn")
			.children[0].classList.add("invisible"); */
	};

	return (
		<div className="input-group mb-3" id="searchBox">
			<SearchConfig />
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
			{/* <div className="input-group-append">
				<button
					className="btn btn-outline-secondary border-left-0 border-right-0"
					style={{ borderColor: "rgb(206, 212, 218)" }}
					type="button"
					id="searchBoxClearBtn"
					onClick={handleClearClick}
				>
					{filter != "" && (
						<FontAwesomeIcon icon={faTimes} className="invisible" />
					)}
				</button>
			</div> */}
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
	filter: PropTypes.string,
	books: PropTypes.array.isRequired
};

function mapStatetoProps(state /* ownProps*/) {
	console.log("mapStatetoProps", "filter: " + state.filter.config);
	return {
		filter: state.filter.config,
		books: state.books
	};
}

const mapDispatchToProps = {
	applyFilter: filterActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
