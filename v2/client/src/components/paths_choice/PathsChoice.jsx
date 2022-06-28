import React, {useState} from "react";
import PropTypes from "prop-types";

import api from "../../utils/api";
import Path from "../path";
import UnitsSelect from "../units_select";
import {PathDiv, TrackButton, TrackButtonDiv} from "./styles";



const PathsChoice = (props) => {
	const [allowedPaths, setPaths] = React.useState([]);
	const [trackedPaths, setTrackedPaths] = React.useState([]);
	const [pathTrackers, setPathTrackers] = React.useState({});
	const [isLoading, setLoading] = React.useState(true);
	const [units, setUnits] = useState("GB");
	const UNITS = ["KB", "MB", "GB"];
	const selectUnit = (e) => setUnits(e.target.value);


	React.useEffect(() => {
		api.getPaths().then(response => {
			const pathsFromServer = response.data;
			const pathsFromLS = localStorage.getItem("TRACKED_PATHS") || [];
			const trackersMap = {};
			const tracked = [];
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
							? <PathDiv key={path}>
								<button onClick={pathTrackers[path].remove}>Stop</button>
								<Path units={units} path={path}>{path}</Path>
								<UnitsSelect units={units} options={UNITS} defaultOption={"GB"} onSelect={selectUnit}/>
							</PathDiv>
							:<TrackButtonDiv>
								<TrackButton key={`add-${path}`} onClick={pathTrackers[path].add}>Track {path}</TrackButton>
							</TrackButtonDiv>)
			}
		</div>
	);
};

PathsChoice.propTypes = {
	className: PropTypes.string
};

export {PathsChoice as PathChoiceUnstyled};