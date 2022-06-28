import React from "react";
import PropTypes from "prop-types";
import {UnitsInputDiv} from "./styles";

const UnitsSelect = (props) => {
	const {options, onSelect, selected, path} = props;
	return (
		<div className={props.className}>
			{
				options.map(option =>
					<UnitsInputDiv key={option}>
						<input  id={option} type={"radio"} value={`${path}-${option}`} checked={option === selected}
							onChange={onSelect}/>
						<label htmlFor={option}>{option}</label>
					</UnitsInputDiv>)
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
