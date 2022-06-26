import React from "react";
import PropTypes from "prop-types";
import api from "../../utils/api";
import Path from "../path";



const PathsChoice = (props) => {
	const [allowedPaths, setPaths] = React.useState([]);
	const [trackedPaths, setTrackedPaths] = React.useState([]);
	const [pathTrackers, setPathTrackers] = React.useState({});
	const [isLoading, setLoading] = React.useState(true);



	React.useEffect(() => {
		api.getPaths().then(response => {
			setPaths(response.data);
			const trackersMap = {};

			response.data.forEach((path) =>
				trackersMap[path] = {
					add : () => setTrackedPaths((trackedPaths) => [...trackedPaths, path]),
					remove : () => setTrackedPaths((trackedPaths) => trackedPaths.filter((p) => p !== path))
				});
			setPathTrackers(trackersMap);
			setLoading(false);
		});
	}, []);

	return(
		<div className={props.className}>
			{
				isLoading ?
					<div>Loading...</div>
					: allowedPaths.map((path) =>
						trackedPaths.includes(path)
							? <div key={path}>
								<button onClick={pathTrackers[path].remove}>Stop tracking {path}</button>
								<Path path={path}>{path}</Path>
							</div>
							: <button key={`add-${path}`} onClick={pathTrackers[path].add}>Track {path}</button>)
			}
		</div>
	);
};

PathsChoice.propTypes = {
	className: PropTypes.string
};

export {PathsChoice as PathChoiceUnstyled};