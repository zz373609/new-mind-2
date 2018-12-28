from flask import Flask, request, jsonify, Response, Blueprint
from src.config.db_config import url, db


def _app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.config['TESTING'] = True
    app.config['ENV'] = 'development'

    db.init_app(app)
    
    return app