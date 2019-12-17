import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => (
	<div className="input-group mb-3">
		<input
			type="text"
			className="form-control"
			placeholder="search a book..."
			aria-label="search a book..."
			aria-describedby="button-addon2"
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

export default SearchBox;
