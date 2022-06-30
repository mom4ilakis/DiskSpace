import styled from "styled-components";
import {PercentBarUnstyled} from "./percent_bar";

export const PercentBar = styled(PercentBarUnstyled)`
	width: ${props => props.percentUsed}%;
    height: 100%;
    background-color: ${props => props.useColor};
    --max-width: ${props => props.percentUsed}%;
    animation-name: loadBar;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    border-radius: 5px 0 0 5px;
   
`;

export const PercentDisplay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	text-align: center;
    font-size: 30px;
`;

export const SpaceDiv = styled.div`
	width: 100%;
    height: 10vh;
    background-color: green;
    animation-name: loadBar;
    animation-duration: 2s;
    margin: 1px;
    border-style: solid;
    border-width: 4px;
    border-radius: 10px;
`;
