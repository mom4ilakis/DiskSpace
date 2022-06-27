import styled from "styled-components";
import {PercentBarUnstyled} from "./percent_bar";

export const PercentBar = styled(PercentBarUnstyled)`
	width: ${props => props.percentUsed}%;
    height: 100%;
    background-color: orange;
`;

export const PercentDisplay = styled.div`
	text-align: center;
    font-size: 30px;
    padding-top: 25px;
`;

export const SpaceDiv = styled.div`
	width: 100%;
    height: 10vh;
    background-color: green;
`;