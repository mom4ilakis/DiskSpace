import React, {useState} from "react";
import PropTypes from "prop-types";

import {useQuery} from "@apollo/client";

import Disk_info from "../disk_info";
import {DiskSpaceQueryTemplate} from "../../utils/queries";

const Path = (props) => {
	const path = props.path;
	const [tracking, setTracking] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [data, setData] = useState({});

	useQuery(
		DiskSpaceQueryTemplate, {
			variables: {
				path,
				units: "MB"
			},
			onCompleted: (data) => {
				setData(data);
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
				? <Disk_info props={data} path={path}/>
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
