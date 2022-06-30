import React from "react";
import PropTypes from "prop-types";

import {PercentDisplay, SpaceDiv} from "./styles";


const PercentBar = ({percentUsed, className}) => {
	return(
		<React.Fragment>
			<SpaceDiv>
				<div className={className}>
					<PercentDisplay>
						{percentUsed}%
					</PercentDisplay>
				</div>
			</SpaceDiv>
		</React.Fragment>
	);
};

PercentBar.propTypes = {
	percentUsed: PropTypes.number,
	className: PropTypes.string
};

export {PercentBar as PercentBarUnstyled};