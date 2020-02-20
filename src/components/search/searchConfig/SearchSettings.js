import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup';


const SearchConfig = () =>
	(
		<DropdownButton
			as={InputGroup.Prepend}
			variant="outline-secondary"
			title="Dropdown"
			id="input-group-dropdown-1"
		>
			<Dropdown.Item href="#">Action</Dropdown.Item>
			<Dropdown.Item href="#">Another action</Dropdown.Item>
			<Dropdown.Item href="#">Something else here</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item href="#">All</Dropdown.Item>
		</DropdownButton>

	);

export default SearchConfig;
