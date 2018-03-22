import os

def get_root_dir():
    path = os.path.dirname(os.path.abspath(__file__))
    path = path.split(os.sep)
    del path[-1]
    dir = os.path.normpath(os.sep.join(path))
    return dir

ROOT = get_root_dir()
