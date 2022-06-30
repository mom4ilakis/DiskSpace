import {UnitsSelectUnstyled} from "./UnitsSelect";
import styled from "styled-components";

export const UnitsSelect = styled(UnitsSelectUnstyled)`
	display: grid;
	grid-template-columns: 30px;
	column-gap: 15px;
	padding: 10px;
	cursor: pointer;
`;

export const UnitsInputDiv = styled.div`
	
`;

export const UnitsChoiceDiv = styled.div`
	border: 1px solid;
	border-color: ${props => props.selected ? "teal" : "inherit"};
	width: 100%;
	height: 30px;
	color: ${props => props.selected ? "teal" : "inherit"};
	padding: 6px;
	text-align: center;
`;
