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
	grid-template-columns: 5% 90% 5%;
	column-gap: 10px;
	padding 25px;
`;

export const TrackButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TrackButton = styled.button`
	height: 50px;
	width: 150px;
`;

export const ButtonArea = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 25% 70%;
  grid-template-columns: 100%;
  row-gap: 4px;
}

`;