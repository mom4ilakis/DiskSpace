import os


def default_config_path():
    filename = 'path.conf'
    dir_name = os.path.dirname(__file__)
    return os.path.join(dir_name, filename)


class AllowedPaths(object):
    def __init__(self, config_path=None):
        self.conf_path = config_path if config_path else default_config_path()
        self._paths_from_env = set()
        self._paths_from_conf = set()

    @property
    def _env_paths(self):
        if self._paths_from_env:
            return self._paths_from_env

        paths = set(os.environ.get('ALLOWED_PATHS_TO_SCAN', '').split(' '))
        self._paths_from_env = paths
        return paths

    @property
    def env_paths(self):
        return list(self._paths_from_env)

    @property
    def _conf_paths(self):
        if self._paths_from_conf:
            return self._paths_from_env
        with open(self.conf_path) as file:
            paths = set([path[:-1] for path in file.readlines()])
            self._paths_from_conf = paths
            return paths

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
