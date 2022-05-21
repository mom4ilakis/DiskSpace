import shutil
import time
import typing

import strawberry

from disk_space import get_space, SpaceType



@strawberry.type
class DiskInfo:
    dir_to_scan: str
    units: str

    @strawberry.field
    def free_space(self) -> int:
        return get_space(self.dir_to_scan, SpaceType.FREE, self.units)

    @strawberry.field
    def used_space(self) -> int:
        return get_space(self.dir_to_scan, SpaceType.USED, self.units)

    @strawberry.field
    def total_space(self) -> int:
        return get_space(self.dir_to_scan, SpaceType.TOTAL, self.units)


@strawberry.type
class Query:

    @strawberry.field
    def disk_info(self, dir_to_scan: str, units: str) -> DiskInfo:
        return DiskInfo(dir_to_scan, units)


@strawberry.type
class Subscription:
    @strawberry.subscription
    async def disk_info_sub(self, dir_to_scan: str, units: str) -> typing.AsyncGenerator[DiskInfo, None]:
        dir_size_info = shutil.disk_usage(dir_to_scan)
        yield DiskInfo(dir_to_scan, units)
        while True:
            curr_dir_size_info = shutil.disk_usage(dir_to_scan)
            if dir_size_info != curr_dir_size_info:
                dir_size_info = curr_dir_size_info
                yield DiskInfo(dir_to_scan, units)
            time.sleep(30)


@strawberry.type
class Query:
    @strawberry.field
    def version(self) -> str:
        return 'v2'


schema = strawberry.Schema(query=Query, subscription=Subscription)
