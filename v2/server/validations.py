from allowed_paths import PathManager

def is_valid_path(path_to_check):
    return PathManager.is_path_allowed(path_to_check)
