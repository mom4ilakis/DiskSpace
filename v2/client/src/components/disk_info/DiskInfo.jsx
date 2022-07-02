import React from "react";
import PropTypes from "prop-types";

import {FreeSpaceDiv, PathText, TotalSpaceDiv, UsedSpaceDiv} from "./styles";
import PercentBar from "../percent_bar";


const DiskInfo = (props) => {
	const percentUsed = Math.round((props.usedSpace / props.totalSpace * 100) % 100);
	const usedColorRGB = () => {
		const baseGreenAmount = 150;
		const greenAmount = percentUsed <= 75 ? baseGreenAmount :
			baseGreenAmount * ((100 - percentUsed) / 100);
		return `rgb(255, ${greenAmount}, 0)`;

	};
	return (
		<React.Fragment>
			<div className={props.className}>
				<PathText>{props.path}</PathText>
				<UsedSpaceDiv>Used: {props.usedSpace} {props.units}</UsedSpaceDiv>
				<FreeSpaceDiv>Free: {props.freeSpace} {props.units}</FreeSpaceDiv>
				<TotalSpaceDiv>Total: {props.totalSpace} {props.units}</TotalSpaceDiv>
			</div>
			<PercentBar percentUsed={percentUsed} useColor={usedColorRGB()}/>
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