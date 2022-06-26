import React from "react";
import PropTypes from "prop-types";

import {FreeSpaceDiv, TotalSpaceDiv, UsedSpaceDiv} from "./styles";
import PercentBar from "../percent_bar";


const DiskInfo = (props) => {
	const percentUsed = Math.round((props.usedSpace / props.totalSpace * 100) % 100);
	return (
		<React.Fragment>
			<div className={props.className}>
				{props.path}
				<UsedSpaceDiv>Used: {props.usedSpace} {props.units}</UsedSpaceDiv>
				<FreeSpaceDiv>Free: {props.freeSpace} {props.units}</FreeSpaceDiv>
				<TotalSpaceDiv>Total: {props.totalSpace} {props.units}</TotalSpaceDiv>
			</div>
			<PercentBar percentUsed={percentUsed}/>
		</React.Fragment>
	);
};

DiskInfo.propTypes = {
	usedSpace: PropTypes.number,
	freeSpace: PropTypes.number,
	totalSpace: PropTypes.number,
	units: PropTypes.string,
	className: PropTypes.string,
	path: PropTypes.string
};

export {DiskInfo as DiskInfoUnstyled};