from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from bson.objectid import ObjectId

music_bp = Blueprint(
    'music',
    __name__,
    url_prefix='/api/v1/music')


@music_bp.route('/all')
def musics():
    data = mongo.db.music.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    return jsonify(result)

@music_bp.route('/<int:id>')
def music(id):
    data = mongo.db.music.find_one({"_id": ObjectId(id)})
    data['_id'] = str(data['_id'])
    return jsonify(data)