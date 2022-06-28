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
	const [units, setUnits] = useState({});
	const UNITS = ["KB", "MB", "GB"];

	const selectUnit = (e) => {
		const [path, unit] = e.target.value.split("-");
		setUnits((units) => {
			const newUnits = {...units};
			newUnits[path] = unit;
			return newUnits;
		});
	};


	React.useEffect(() => {
		api.getPaths().then(response => {
			const pathsFromServer = response.data;
			const pathsFromLS = localStorage.getItem("TRACKED_PATHS") || [];
			const trackersMap = {};
			const unitsMap = {};
			const tracked = [];
			setPaths(pathsFromServer);

			pathsFromServer.forEach((path) =>{
				if (pathsFromLS.includes(path)) {
					tracked.push(path);
				}

				unitsMap[path] = UNITS[2];

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
			setUnits(unitsMap);
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
								<Path units={units[path]} path={path}>{path}</Path>
								<UnitsSelect units={units} options={UNITS} selected={units[path]} path={path} onSelect={selectUnit}/>
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