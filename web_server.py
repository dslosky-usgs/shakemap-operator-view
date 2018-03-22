import os,sys
import json
from flask import Flask, render_template, send_from_directory

from util.util import ROOT
from feedGenerator import FeedGenerator

BASE_DIR = ROOT
VIEW_DIR = os.path.join(ROOT,'view')
STATIC_DIR = os.path.join(ROOT,'view','static')

app = Flask(__name__,
            template_folder=VIEW_DIR,
            static_folder=STATIC_DIR)

@app.route('/<path:filename>')
def send_(filename):
    return send_from_directory(VIEW_DIR, filename)

@app.route('/shakemaps/<path:filename>')
def shakemap_product(filename):
    return send_from_directory(BASE_DIR, 'shakemaps/' + filename)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products.json')
def products():
    # dynamically generate the products feed
    fg = FeedGenerator()
    fg.generate()

    return fg.json

@app.route('/configs.json')
def configs():
    with open('configs.json', 'r') as conf:
        conf_json = conf.read()

    return conf_json


def start():
    app.run(host='0.0.0.0', port=5000, threaded=True)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '-d':
            # run in debug mode
            app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
    else:
        start()
