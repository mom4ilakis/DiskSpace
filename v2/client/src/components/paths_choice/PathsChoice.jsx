import React from "react";
import PropTypes from "prop-types";
import api from "../../utils/api";
import Path from "../path";



const PathsChoice = (props) => {
	const [allowedPaths, setPaths] = React.useState([]);
	React.useEffect(() => {
		api.getPaths().then(response => {
			setPaths(response.data);
		});
	}, []);

	return(
		<div className={props.className}>
			{allowedPaths.map((path) => <Path key={path} path={path}>{path}</Path>)}
		</div>
	);

};

PathsChoice.propTypes = {
	className: PropTypes.string
};

export {PathsChoice as PathChoiceUnstyled};