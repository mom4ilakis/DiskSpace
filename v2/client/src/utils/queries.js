import {gql} from "@apollo/client";

export const DiskSpaceSubTemplate = gql`
subscription MySubscription($path: String!, $units: String!) {
  diskInfoSub(dirToScan: $path, units: $units) {
    dirToScan
    freeSpace
    totalSpace
    units
    usedSpace
  }
}`;

export const DiskSpaceQueryTemplate = gql`
query myQuery($path: String!, $units: String!) {
	diskInfo(dirToScan: $path, units: $units) {
		dirToScan
		freeSpace
		totalSpace
		units
		usedSpace
	  }
 }`;


export const RamQueryTemplate = gql`
subscription MySubscription($units: String!) {
  ramUsage(units: $units) {
    available
    free
    percent
    total
    units
    used
  }
}`;
