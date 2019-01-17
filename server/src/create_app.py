from flask import Flask, request, jsonify, Response, Blueprint
from src.config.db_config import url, mongo
import logging

def _app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = url
    print(url)
    app.config['TESTING'] = True
    app.config['ENV'] = 'development'

    mongo.init_app(app)
    
    return app
