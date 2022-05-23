const DiskSpaceQueryTemplate = `
subscription MySubscription($path, $units) {
  diskInfoSub(dirToScan: $path, units: $units) {
    dirToScan
    freeSpace
    totalSpace
    units
    usedSpace
  }
}`;

export default DiskSpaceQueryTemplate;
