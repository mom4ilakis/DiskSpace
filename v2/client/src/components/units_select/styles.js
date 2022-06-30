import {UnitsSelectUnstyled} from "./UnitsSelect";
import styled from "styled-components";

export const UnitsSelect = styled(UnitsSelectUnstyled)`
	display: grid;
	grid-template-columns: 30px;
	grid-template-rows: 30px;
	column-gap: 15px;
	padding: 10px;
`;

export const UnitsInputDiv = styled.div`
	
`;

export const UnitsChoiceDiv = styled.div`
	border: 1px solid teal;
	width: 100%;
	height: 30px;
	color: teal;
	padding: 6px;
	text-align: center;
`;
