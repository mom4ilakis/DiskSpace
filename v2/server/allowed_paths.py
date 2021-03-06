import json
import os


def config_path():
    path = os.environ.get('PATHS_CONFIG_FILENAME', '')

    if path:
        return path

    filename = 'path.json'
    dir_name = os.path.dirname(__file__)

    return os.path.join(dir_name, filename)


class AllowedPaths(object):
    _instance = None

    def __init__(self):
        self.conf_path = config_path()
        self._paths_from_env = set()
        self._paths_from_conf = set()

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(AllowedPaths, cls).__new__(cls)

            return cls._instance

    @property
    def _env_paths(self):
        if self._paths_from_env:
            return self._paths_from_env
        paths = os.environ.get('ALLOWED_PATHS_TO_SCAN', '')

        if paths:
            paths = set(paths.split(' '))
            self._paths_from_env = paths
        else:
            paths = set()

        return paths

    @property
    def env_paths(self):
        return list(self._paths_from_env)

    @property
    def _conf_paths(self):
        if self._paths_from_conf:
            return self._paths_from_conf
        try:
            with open(self.conf_path) as file:
                data = json.load(file)
                paths = set(data['paths'])
                self._paths_from_conf = paths
                return paths
        except FileNotFoundError:
            return set()

    @property
    def conf_paths(self):
        return list(self._conf_paths)

    @property
    def _allowed_paths(self):
        return self._env_paths | self._conf_paths

    @property
    def allowed_paths(self):
        return list(self._allowed_paths)

    def is_path_allowed(self, path):
        return path in self._allowed_paths


PathManager = AllowedPaths()
