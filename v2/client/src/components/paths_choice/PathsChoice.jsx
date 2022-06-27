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
			const pathsFromServer = response.data;
			const pathsFromLS = localStorage.getItem("TRACKED_PATHS");
			const trackersMap = {};
			const tracked = [];
			// console.log(pathsFromLS);
			setPaths(pathsFromServer);

			pathsFromServer.forEach((path) =>{
				if (pathsFromLS.includes(path)) {
					tracked.push(path);
				}
				trackersMap[path] = {
					add : () => {
						setTrackedPaths((trackedPaths) => {
							const newTrackedPaths = [...trackedPaths, path];
							localStorage.setItem("TRACKED_PATHS", newTrackedPaths);
							return newTrackedPaths;
						});
					},
					remove : () => setTrackedPaths((trackedPaths) => {
						const newTrackedPaths = trackedPaths.filter((p) => p !== path);
						localStorage.setItem("TRACKED_PATHS", newTrackedPaths);
						return newTrackedPaths;
					})
				};
			});

			setPathTrackers(trackersMap);
			// console.log(tracked);
			setTrackedPaths(tracked);
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