ALLOWED_PATHS = set([
    'G:\\'
])


def is_valid_path(path_to_check):
    return path_to_check in ALLOWED_PATHS
