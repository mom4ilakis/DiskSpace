import psutil


async def get_cpu_usage(polling_interval: float = 5.0) -> float:
    return psutil.cpu_percent(polling_interval)
