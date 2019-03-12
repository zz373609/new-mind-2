from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from flask_restful import reqparse
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle
from src.util.validate_parse import ValidateParse

post_music_reqparse = ValidateParse()
post_music_reqparse.add_argument(
    'name',
    location=['json'],
    required=True
)
post_music_reqparse.add_argument(
    'title',
    location=['json'],
    required=True
)

put_music_reqparse = ValidateParse()

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

@music_bp.route('/<string:id>', methods=['GET','POST','PUT','DELETE'])
def operate_music(id):
    if request.method == 'GET':
        music(id)
    elif request.method == 'POST':
        new_mudic(id)
    elif request.method == 'PUT':
        update_music(id)
    elif request.method == 'DELETE':
        delete_music(id)



def music(id):
    result = mongo.db.music.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "music":result
    })
    return jsonify(res.get_response())


def new_mudic(id):
    json = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    music = mongo.db.music
    if id == "new":
        post_music_reqparse.parse_source(json)
        _id = music.insert_one(json)
        res = ResponseHandle({
            "id":str(_id.inserted_id)
        })
        return jsonify(res.get_response())
    else:
        raise InvalidUsage(status_code=500,payload=set_error(500,"wrong id"))


def update_music(id):
    json = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    music = mongo.db.music
    music.update_one({"_id":ObjectId(id)},{"$set":json})
    res = ResponseHandle({
        "message":"update succeess"
    })
    return jsonify(res.get_response())

def delete_music(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    music = mongo.db.music
    music.delete_one({"_id":ObjectId(id)})
    res = ResponseHandle({
        "message":"delete succeess"
    })
    return jsonify(res.get_response())