import shutil
from enum import Enum

HTML = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/static/style.css">
    <title>Disk Usage</title>
</head>
<body>
    <div class="list">
        {list}
    <div>
</body>
</html>
'''
PATH_HTML_FRAGMENT = '''
<div class="space_usage">
      {path}
        <div class="used_space_text">Used: {used_space} GB</div>
        <div class="free_space_text">Free: {free_space} GB</div>
        <div class="total_space_text">Total: {total_space} GB</div>
    </div>
    <div class="space_bar">
        <div class="used_space_bar" style="width: {percent_used}%;">
            <div class="used_space_percent">
                {percent_used}%
            </div>
        </div>
    </div>
'''


class MemoryUnist(Enum):
    BYTES = 1
    KB = 1024
    MB = KB*1024
    GB = MB*1024


def convert_to(bs, target=MemoryUnist.GB):
    return bs // target.value


class PathUsageView(object):
    def __init__(self, path):
        self.path = path

    def populate_html(self):
        [total, used, free] = shutil.disk_usage(self.path)

        total = convert_to(total)
        used = convert_to(used)
        free = convert_to(free)

        percent_used = int((used / total * 100) % 100)
        return PATH_HTML_FRAGMENT.format(
            path=self.path,
            free_space=free,
            used_space=used,
            total_space=total,
            percent_used=percent_used
        )


class DiskUsageView(object):
    def __init__(self, paths=None):
        self.paths = paths or ['G:\\']

    def populate_html(self):
        path_views = [PathUsageView(path) for path in self.paths]
        list_entries = ''.join(['''<div class="list-entry">{0}</div>'''.format(ph.populate_html()) for ph in path_views])
        return HTML.format(list=list_entries)

