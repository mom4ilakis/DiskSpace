import {UnitsSelectUnstyled} from "./UnitsSelect";
import styled from "styled-components";


export const UnitSelectedDiv = styled.div`
	margin-top: 35px;
	font-size: 30px;
`;

export const UnitsSelect = styled(UnitsSelectUnstyled)`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	overflow: hidden;
	font-size: 30px;
`;

export const UnitsInputDiv = styled.div`
	display: grid;

	grid-template-columns: 50px;
	row-gap: 5px;

	height: 80%;

	font-size: 20px;

	animation: expand 300ms;
	
`;

export const UnitsChoiceDiv = styled.div`
	height: 100%;
	
	border: 1px solid;
	border-color: ${props => props.selected ? "teal" : "inherit"};
	border-radius: 5px;
	
	color: ${props => props.selected ? "teal" : "inherit"};
	text-align: center;
	
	&:hover: {
		border-color: teal;
	}
`;
