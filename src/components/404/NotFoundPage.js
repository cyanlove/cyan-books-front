import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExclamationTriangle,
	faSadTear
} from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => (
	<div
		style={{
			textAlign: "center",
			paddingTop: 40,
			color: "rgb(0, 180, 180)"
		}}
	>
		<h1>Error 404</h1>
		<h3>
			<FontAwesomeIcon icon={faExclamationTriangle} /> Page not found...{" "}
			<FontAwesomeIcon
				icon={faExclamationTriangle}
				style={{ marginTop: 40 }}
			/>
		</h3>
		<FontAwesomeIcon icon={faSadTear} size="6x" style={{ marginTop: 40 }} />
	</div>
);

export default NotFoundPage;
