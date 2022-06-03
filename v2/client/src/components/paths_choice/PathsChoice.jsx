import React from "react";
import PropTypes from "prop-types";
import api from "../../utils/api";
import {PathUnstyled} from "../path/Path";



const PathsChoice = (props) => {
	const [allowedPaths, setPaths] = React.useState([]);
	React.useEffect(() => {
		api.get_paths().then(response => setPaths(response.data));
	}, []);

	return(
		<div className={props.className}>
			{allowedPaths.map((path) => <PathUnstyled key={path} path={path}>{path}</PathUnstyled>)}
		</div>
	);

};

PathsChoice.propTypes = {
	className: PropTypes.string
};

export {PathsChoice as PathChoiceUnstyled};