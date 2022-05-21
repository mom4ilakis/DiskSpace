import shutil
from enum import IntEnum, Enum


class MemoryUnits(IntEnum):
    BYTES = 1
    KB = 1024
    MB = KB * 1024
    GB = MB * 1024


class SpaceType(Enum):
    USED = 'used'
    FREE = 'free'
    TOTAL = 'total'


def format_size(bs, to_format):
    if to_format == MemoryUnits.BYTES:
        return bs
    return bs // int(to_format)


def get_space(path_to_scan='', space_type=SpaceType.TOTAL, unit='KB'):
    if path_to_scan == '':
        return 0

    space_info = shutil.disk_usage(path_to_scan)

    return format_size(getattr(space_info, space_type.value), MemoryUnits[unit])


class DiskSpace(object):
    def __init__(self, path, to_format=MemoryUnits.KB):
        self.path = path
        self.format = to_format

    def get_free_space(self):
        [_, _, free] = shutil.disk_usage(self.path)

        return format_size(free, self.format)

    def get_total_space(self):
        [total, _, _] = shutil.disk_usage(self.path)

        return format_size(total, self.format)

    def get_used_space(self):
        [_, used, _] = shutil.disk_usage(self.path)

        return format_size(used, self.format)
