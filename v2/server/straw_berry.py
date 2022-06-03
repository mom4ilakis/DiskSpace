import shutil
import time
import typing

import strawberry

from disk_space import get_space, SpaceType
from validations import is_valid_path


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
    def disk_info(self, dir_to_scan: str, units: str) -> typing.Optional[DiskInfo]:
        if is_valid_path(dir_to_scan):
            return DiskInfo(dir_to_scan, units)
        else:
            return None


@strawberry.type
class Subscription:
    @strawberry.subscription
    async def disk_info_sub(self, dir_to_scan: str, units: str) -> \
            typing.Optional[typing.AsyncGenerator[DiskInfo, None]]:

        if is_valid_path(dir_to_scan):
            dir_size_info = shutil.disk_usage(dir_to_scan)
            yield DiskInfo(dir_to_scan, units)
            while True:
                curr_dir_size_info = shutil.disk_usage(dir_to_scan)
                if dir_size_info != curr_dir_size_info:
                    dir_size_info = curr_dir_size_info
                    yield DiskInfo(dir_to_scan, units)
                time.sleep(30)
        else:
            return


schema = strawberry.Schema(query=Query, subscription=Subscription)
