import React from "react";
import PropTypes from "prop-types";

import {PercentDisplay, SpaceDiv} from "./styles";


const PercentBar = ({percent_used, className}) => {
	return(
		<SpaceDiv>
			<div className={className}>
				<PercentDisplay>
					{percent_used}%
				</PercentDisplay>
			</div>
		</SpaceDiv>
	);
};

PercentBar.propTypes = {
	percent_used: PropTypes.number,
	className: PropTypes.string
};

export {PercentBar as PercentBarUnstyled};