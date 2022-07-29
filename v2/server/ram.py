import psutil

from v2.server.disk_space import MemoryUnits, format_size


def get_ram_usage(in_unist=MemoryUnits.GB) -> tuple:
    raw_data = psutil.virtual_memory()

    formatted_data = {
        name: (lambda v: format_size(v, in_unist) if name != 'percent' else v)(value)
        for name, value in raw_data._asdict().items()
    }
    formatted_data['units'] = in_unist.name
    
    return formatted_data
