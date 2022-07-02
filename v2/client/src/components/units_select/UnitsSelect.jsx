import React, {useState} from "react";
import PropTypes from "prop-types";
import {UnitsChoiceDiv, UnitSelectedDiv, UnitsInputDiv} from "./styles";

const UnitsSelect = (props) => {
	const {options, onSelect, selected, path} = props;

	const [hover, setHover] = useState(false);
	const onMouseOver = () => setHover(true);
	const onMouseOut = () => setHover(false);

	return (
		<div className={props.className} onMouseOver={onMouseOver} onMouseOut={onMouseOut} M>
			{
				hover
					? <UnitsInputDiv> {
						options.map(option =>
							<UnitsChoiceDiv key={option} id={path} onClick={onSelect} selected={option === selected}>
								{option}
							</UnitsChoiceDiv>
						)}
					</UnitsInputDiv>
					: <UnitSelectedDiv>{selected}</UnitSelectedDiv>
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
