import React from "react";
import logo from "../../../assets/cyan-books-logo.png";
import SearchBox from "../search/SearchBox";
import "./css/header.css";

const Header = () => (
	<>
		<div className="headerWrapper">
			<div
				className="headerLogo"
				style={{ backgroundImage: `url(${logo})` }}
			></div>
			<SearchBox />
		</div>
		<nav>Home | add | lists | Pol Colomo </nav>
	</>
);

export default Header;
