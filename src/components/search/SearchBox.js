import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";
import SearchSettings from "./searchSettings/SearchSettings";
import "./css/searchBox.css";

const SearchBox = ({ filterSettings = "", value = "", applyFilter, books }) => {
	const handleSearchChange = e => {
		handleSearchFocus(e);
		applyFilter({ input: e.target.value, settings: filterSettings }, books);
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
		applyFilter({ input: "", settings: filterSettings }, books);

		//document.querySelector("#searchBoxInput").focus();
		/* document
			.querySelector("#searchBoxClearBtn")
			.children[0].classList.add("invisible"); */
	};

	const onSettingsSelect = selected => {
		filterSettings = selected;
	};

	return (
		<InputGroup className="mb-3" id="searchBox">
			<SearchSettings
				options={["1", "2", "3", "4"]}
				selected={null}
				handleSelect={onSettingsSelect}
			/>
			<FormControl
				placeholder="search books..."
				aria-label="search books..."
				id="searchBoxInput"
				value={value}
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
		</InputGroup>
	);
};

SearchBox.propTypes = {
	applyFilter: PropTypes.func.isRequired,
	filterSettings: PropTypes.string,
	value: PropTypes.string,
	books: PropTypes.array.isRequired
};

function mapStatetoProps(state /* ownProps*/) {
	console.log("mapStatetoProps", "filter: " + state.filter.input);
	return {
		value: state.filter.input,
		books: state.books,
		filterSettings: state.filter.settings
	};
}

const mapDispatchToProps = {
	applyFilter: filterActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
