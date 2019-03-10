from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle

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
    res = ResponseHandle({
        "musics":result
    })
    return jsonify(res.get_response())

@music_bp.route('/<int:id>')
def music(id):
    result = mongo.db.music.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "music":result
    })
    return jsonify(res.get_response())