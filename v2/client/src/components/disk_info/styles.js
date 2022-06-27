import styled from "styled-components";
import {DiskInfoUnstyled} from "./DiskInfo";

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
    align-content: space-between;
    display: flex;
    justify-content: space-around;
`;