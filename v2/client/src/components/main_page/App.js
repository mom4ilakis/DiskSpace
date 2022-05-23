import React from "react";

import DiskInfo from "../disk_info";
import PropTypes from "prop-types";


function App(props) {
	return (
		<div className={props.className}>
			<DiskInfo/>
		</div>
	);
}

App.propTypes = {
	className: PropTypes.string
};

export {App as AppUnstyled};
