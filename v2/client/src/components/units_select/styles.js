import {UnitsSelectUnstyled} from "./UnitsSelect";
import styled from "styled-components";

export const UnitsSelect = styled(UnitsSelectUnstyled)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const UnitsInputDiv = styled.div`
	display: grid;
	grid-template-columns: 25px 50px;
	column-gap: 15px;

	padding: 10px;
`;
