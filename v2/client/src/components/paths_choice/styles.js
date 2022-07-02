import {PathChoiceUnstyled} from "./PathsChoice";
import styled from "styled-components";


export const PathChoice = styled(PathChoiceUnstyled)`
	display: grid;
	grid-template-columns: 100%;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	row-gap: 20px;
`;

export const PathDiv = styled.div`
	display: grid;
	grid-template-columns: 5% 95%;
	column-gap: 10px;
	padding 25px;
`;

export const TrackButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	animation-name: fadeIn;
	animation-duration: 500ms;
`;

export const StopButton = styled.button`
	border-radius: 5px;
	border-color: gray;
	
	cursor: pointer;

	&:hover {
		transition: all 250ms ease-in;
		background-color: red;
		color: white;
		
	}
`;

export const TrackButton = styled.button`
	height: 50px;
	width: 150px;
	
	border-radius: 5px;
	border-color: gray;
	
	cursor: pointer;
	
	&:hover {
		background-color: teal;
		color: white;
		
		transition: all 250ms ease-in;
	}
	
`;

export const ButtonArea = styled.div`
	height: 100%;
	width: 100%;
	
	display: grid;
	grid-template-rows: 70% 25%;
	grid-template-columns: 100%;
	row-gap: 4px;
	
	animation-name: fadeIn;
	animation-duration: 500ms;
`;
