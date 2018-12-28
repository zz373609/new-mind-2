# -*- coding:utf-8 -*-
# from gevent import monkey
# from gevent.pywsgi import WSGIServer

# gevent monkey patch

# monkey.patch_all()
import logging
from src.create_app import _app


if __name__ == '__main__':
    app = _app()
    app.run(host='0.0.0.0', port=5030, debug=True)

    # gevent server

    # http_server = WSGIServer((host, port), app, log=logger)
    # logging.info(" * Running on http://{0}:{1}/ (Press CTRL+C to quit)".format(
    #     host, port))
    # http_server.serve_forever()
