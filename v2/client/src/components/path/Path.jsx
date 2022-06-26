import React, {useState} from "react";
import PropTypes from "prop-types";

import {useSubscription} from "@apollo/client";

import DiskInfo from "../disk_info";
import {DiskSpaceSubTemplate} from "../../utils/queries";


const UnitsSelect = (props) => {
	const {options, onSelect, defaultOption} = props;
	return(
		<select onChange={onSelect} defaultValue={defaultOption}>{
			options.map(option=>
				<option key={option} value={option}>{option}</option>)
		}</select>
	);
};

UnitsSelect.propTypes = {
	options: PropTypes.array,
	onSelect: PropTypes.func,
	className: PropTypes.string,
	defaultOption: PropTypes.string
};

const Path = (props) => {
	const selectUnit = (e) => setUnits(e.target.value);

	const UNITS = ["KB", "MB", "GB"];
	const path = props.path;

	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [diskInfo, setDiskInfo] = useState({});
	const [units, setUnits] = useState("GB");

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
				<UnitsSelect options={UNITS} defaultOption={"GB"} onSelect={selectUnit}/>
				<DiskInfo {...diskInfo} path={path}/>
			</div>

	);
};

Path.propTypes = {
	path: PropTypes.string
};

export {Path as PathUnstyled};
