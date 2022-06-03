import {gql} from "@apollo/client";

const DiskSpaceSubTemplate = gql`
subscription MySubscription($path: String!, $units: String!) {
  diskInfoSub(dirToScan: $path, units: $units) {
    dirToScan
    freeSpace
    totalSpace
    units
    usedSpace
  }
}`;

const DiskSpaceQueryTemplate = gql`
query myQuery($path: String!, $units: String!) {
	diskInfo(dirToScan: $path, units: $units) {
		dirToScan
		freeSpace
		totalSpace
		units
		usedSpace
	  }
 }`;

export {DiskSpaceQueryTemplate, DiskSpaceSubTemplate};
