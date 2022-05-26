import React from "react";
import PropTypes from "prop-types";
import api from "../../utils/api";



const PathsChoice = (props) => {
	const [allowedPaths, setPaths] = React.useState([]);
	React.useEffect(() => {
		api.get_paths().then(response => setPaths(response.data));
	}, []);

	return(
		<div className={props.className}>
			Track paths?
			{allowedPaths.map((path) => <div key={path}>{path}</div>)}
		</div>
	);

};

PathsChoice.propTypes = {
	className: PropTypes.string
};

export {PathsChoice as PathChoiceUnstyled};