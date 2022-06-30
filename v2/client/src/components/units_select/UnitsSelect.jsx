import React from "react";
import PropTypes from "prop-types";
import {UnitsChoiceDiv, UnitsInputDiv} from "./styles";

const UnitsSelect = (props) => {
	const {options, onSelect, selected, path} = props;
	return (
		<div className={props.className}>
			{
				options.map(option =>
					<UnitsChoiceDiv key={option} id={path} onClick={onSelect} selected={option === selected}>
						{option}
					</UnitsChoiceDiv>
				)
			}
		</div>
	);
};

UnitsSelect.propTypes = {
	options: PropTypes.array,
	onSelect: PropTypes.func,
	className: PropTypes.string,
	selected: PropTypes.string,
	path: PropTypes.string
};

export {UnitsSelect as UnitsSelectUnstyled};
