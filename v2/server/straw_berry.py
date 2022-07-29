import asyncio
import shutil
import typing

import strawberry

from disk_space import get_space, SpaceType, MemoryUnits
from v2.server.cpu import get_cpu_usage
from v2.server.ram import get_ram_usage
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
class RAMUsage:
    total: int
    available: int
    percent: float
    used: int
    free: int
    units: str


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
                await asyncio.sleep(30)
        else:
            return

    @strawberry.subscription
    async def cup_usage(self, pooling_interval: float = 5) -> typing.Optional[typing.AsyncGenerator[float, None]]:
        while True:
            cpu_usage = await get_cpu_usage(pooling_interval)
            yield cpu_usage

    @strawberry.subscription
    async def ram_usage(self, units: str) -> typing.Optional[typing.AsyncGenerator[RAMUsage, None]]:
        while True:
            ram_usage = get_ram_usage(MemoryUnits[units])
            yield RAMUsage(**ram_usage)
            await asyncio.sleep(10)


schema = strawberry.Schema(query=Query, subscription=Subscription)
