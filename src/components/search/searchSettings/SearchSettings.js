import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";

const SearchSettings = ({ options, selected, handleSelect }) => {
	const ALL = "all";
	return (
		<DropdownButton
			as={InputGroup.Prepend}
			variant="outline-secondary"
			title={selected || ALL}
			id="input-group-dropdown-1"
		>
			{options.map((opt, i) => (
				<Dropdown.Item href="#" key={i} onClick={() => handleSelect(opt)}>
					{opt}
				</Dropdown.Item>
			))}
			<Dropdown.Divider />
			<Dropdown.Item href="#" onClick={() => handleSelect(ALL)}>
				{ALL}
			</Dropdown.Item>
		</DropdownButton>
	);
};
SearchSettings.propTypes = {
	handleSelect: PropTypes.func.isRequired,
	selected: PropTypes.string,
	options: PropTypes.array.isRequired
};

export default SearchSettings;
