import React from "react";

import DiskInfo from "../disk_info";
import PropTypes from "prop-types";
import PathChoice from "../paths_choice";


function App(props) {
	return (
		<div className={props.className}>
			<PathChoice/>
			<DiskInfo/>
		</div>
	);
}

App.propTypes = {
	className: PropTypes.string
};

export {App as AppUnstyled};
