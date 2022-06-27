from v2.server.allowed_paths import PathManager

ALLOWED_PATHS = set([
    'G:\\'
])


def is_valid_path(path_to_check):
    return PathManager.is_path_allowed(path_to_check)
