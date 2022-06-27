import React from "react";
import PropTypes from "prop-types";

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

export {UnitsSelect as UnitsSelectUnstyled};
