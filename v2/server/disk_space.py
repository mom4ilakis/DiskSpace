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
