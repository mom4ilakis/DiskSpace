import React from "react";

import PropTypes from "prop-types";
import PathChoice from "../paths_choice";


function App(props) {
	return (
		<div className={props.className}>
			<PathChoice/>
		</div>
	);
}

App.propTypes = {
	className: PropTypes.string
};

export {App as AppUnstyled};
