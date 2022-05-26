import React from "react";
import PropTypes from "prop-types";

import {FreeSpaceDiv, TotalSpaceDiv, UsedSpaceDiv} from "./styles";
import PercentBar from "../percent_bar";


const DiskInfo = (props) => {
	const percent_used = (props.used_space / props.total_space * 100) % 100;

	return (
		<React.Fragment>
			<div className={props.className}>
				{props.path}
				<UsedSpaceDiv>Used: {props.used_space} {props.units}</UsedSpaceDiv>
				<FreeSpaceDiv>Free: {props.free_space} {props.units}</FreeSpaceDiv>
				<TotalSpaceDiv>Total: {props.total_space} {props.units}</TotalSpaceDiv>
			</div>
			<PercentBar percent_used={percent_used}/>
		</React.Fragment>
	);
};

DiskInfo.propTypes = {
	used_space: PropTypes.number,
	free_space: PropTypes.number,
	total_space: PropTypes.number,
	units: PropTypes.string,
	className: PropTypes.string,
	path: PropTypes.string
};

DiskInfo.defaultProps ={
	used_space: 50,
	free_space: 50,
	total_space: 100,
	units: "MB",
	path: "<Placeholder path>"
};

export {DiskInfo as DiskInfoUnstyled};