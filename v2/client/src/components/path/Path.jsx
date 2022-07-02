import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import {useSubscription} from "@apollo/client";

import DiskInfo from "../disk_info";
import {DiskSpaceSubTemplate} from "../../utils/queries";


const Path = ({path, units}) => {

	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [diskInfo, setDiskInfo] = useState({});

	useSubscription(DiskSpaceSubTemplate, {
		variables:{
			path,
			units
		},
		onSubscriptionData: ({subscriptionData}) => {
			if (subscriptionData.error) {
				setError(error);
			}
			else {
				const diskInfo = subscriptionData.data.diskInfoSub;
				setDiskInfo(diskInfo);
				setLoading(subscriptionData.loading);
			}
		}
	});

	if (error) {
		console.error(error);
		return <div>Error</div>;
	}

	return (
		isLoading
			? <div>Loading ...</div>
			: <div>
				<DiskInfo {...diskInfo} path={path}/>
			</div>
	);
};

Path.propTypes = {
	path: PropTypes.string,
	units: PropTypes.string,
	refreshSub: PropTypes.number
};

export {Path as PathUnstyled};
