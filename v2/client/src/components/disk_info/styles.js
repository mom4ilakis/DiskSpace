import styled from "styled-components";
import {DiskInfoUnstyled} from "./DiskInfo";

export const PathText = styled.div`
	max-width: 1000px;
	max-height: 40px;
	word-break: break-word;
	overflow: hidden;	
	padding-left: 10px;	
`;

export const UsedSpaceDiv = styled.div`
	color: var(--used-space-main-color);
`;
export const FreeSpaceDiv = styled.div`
	color: green;
`;
export const TotalSpaceDiv = styled.div`
	color: inherit;
`;

export const DiskInfo = styled(DiskInfoUnstyled)`
	font-size: 30px;
  	display: grid;
  	grid-template-columns: 50% 17% 17% 17%;
  	column-gap: 5px;
  	
  	animation-name: fadeIn;
	animation-duration: 500ms;
`;