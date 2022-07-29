import React from "react";
import PropTypes from "prop-types";



const RamPanel = (props) => {
	const {total, available, percent, used, free, units} = props;

	const tooltip = `${used} / ${total} ${units} Free:${free} ${units}`;
	return(
		<div>
			<div title={tooltip}>{percent}% Ram used</div>
		</div>
	);
};

RamPanel.propTypes = {
	className: PropTypes.string,
	total: PropTypes.number,
	available: PropTypes.number,
	used: PropTypes.number,
	free: PropTypes.number,
	percent: PropTypes.number,
	units: PropTypes.string
};

export {RamPanel as RamPanelUnstyled};
