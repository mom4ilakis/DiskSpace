import React from "react";

import PropTypes from "prop-types";
import PathChoice from "../paths_choice";
import Ram from "../ram";


function App(props) {
	return (
		<div className={props.className}>
			<Ram/>
			<PathChoice/>
		</div>
	);
}

App.propTypes = {
	className: PropTypes.string
};

export {App as AppUnstyled};
