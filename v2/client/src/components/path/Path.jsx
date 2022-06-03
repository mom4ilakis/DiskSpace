import React, {useState} from "react";
import PropTypes from "prop-types";

import {useQuery} from "@apollo/client";

import DiskInfo from "../disk_info";
import {DiskSpaceQueryTemplate} from "../../utils/queries";

const Path = (props) => {
	const path = props.path;
	const [tracking, setTracking] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [diskInfo, setDiskInfo] = useState({});

	useQuery(
		DiskSpaceQueryTemplate, {
			variables: {
				path,
				units: "MB"
			},
			onCompleted: ({diskInfo}) => {
				setDiskInfo({
					freeSpace: diskInfo.freeSpace,
					totalSpace: diskInfo.totalSpace,
					usedSpace: diskInfo.usedSpace,
					units: diskInfo.units,
					path: diskInfo.dirToScan
				});
				setLoading(false);
			},
			onError: (error) => {
				setError(error);
				setLoading(false);
			}
		}
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		console.error(error);
		return <div>Error</div>;
	}

	const startTracking = () => setTracking(true);
	const stopTracking = () => setTracking(false);
	return (
		<div>
			{tracking
				? <DiskInfo {...diskInfo} path={path}/>
				: <button onClick={startTracking}>Track {path}</button>
			}
			{tracking && <button onClick={stopTracking}>Stop tracking {path}</button>}
		</div>
	);
};

Path.propTypes = {
	path: PropTypes.string
};

export {Path as PathUnstyled};
