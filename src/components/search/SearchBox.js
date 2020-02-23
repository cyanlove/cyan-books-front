import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as filterActions from "../../redux/actions/filterActions";
import SearchSettings from "./searchSettings/SearchSettings";
import "./css/searchBox.css";

const SearchBox = ({
	filterSettings,
	filterOption,
	value = "",
	applyFilter,
	books
}) => {
	const handleSearchChange = e => {
		handleSearchFocus(e);
		applyFilter({ input: e.target.value, option: filterOption }, books);
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
		applyFilter({ input: "", option: filterOption }, books);

		//document.querySelector("#searchBoxInput").focus();
		/* document
			.querySelector("#searchBoxClearBtn")
			.children[0].classList.add("invisible"); */
	};

	const onSettingsSelect = selected => {
		applyFilter({ option: selected, input: value }, books);
	};

	return (
		<InputGroup className="mb-3" id="searchBox">
			<SearchSettings
				options={filterSettings}
				selected={filterOption}
				handleSelect={onSettingsSelect}
			/>
			<FormControl
				placeholder="search books..."
				aria-label="search books..."
				id="searchBoxInput"
				value={value}
				onChange={handleSearchChange}
				onFocus={handleSearchFocus}
				className="border-right-0"
			/>
			<div className="input-group-append">
				{value != "" && (
					<Button
						variant="outline-secondary"
						id="searchBoxClearBtn"
						className="border-left-0 border-right-0"
						onClick={handleClearClick}
					>
						<FontAwesomeIcon icon={faTimes} />
					</Button>
				)}
			</div>
			<div className="input-group-append">
				<Button
					variant="outline-secondary"
					id="searchBoxTriggerBtn"
					className="border-left-0"
				>
					<FontAwesomeIcon icon={faSearch} />
				</Button>
			</div>
		</InputGroup>
	);
};

SearchBox.propTypes = {
	applyFilter: PropTypes.func.isRequired,
	filterSettings: PropTypes.array.isRequired,
	value: PropTypes.string,
	filterOption: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired
};

function mapStatetoProps(state /* ownProps*/) {
	console.log("mapStatetoProps", state.filter);
	return {
		value: state.filter.input,
		books: state.books,
		filterSettings: state.filter.settings,
		filterOption: state.filter.option
	};
}

const mapDispatchToProps = {
	applyFilter: filterActions.applyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
