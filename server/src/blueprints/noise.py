from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from flask_restful import reqparse
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle
from src.util.validate_parse import ValidateParse
import datetime

noise_bp = Blueprint(
    'noise',
    __name__,
    url_prefix='/api/v1/noise')


@noise_bp.route('/all')
def noises():
    data = mongo.db.music.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    res = ResponseHandle({
        "noises":result
    })
    return jsonify(res.get_response())

@noise_bp.route('/<string:id>', methods=['GET','POST','PUT','DELETE'])
def operate_noise(id):
    if request.method == 'GET':
        return noise(id)
    elif request.method == 'POST':
        return new_noise(id)
    elif request.method == 'PUT':
        return update_noise(id)
    elif request.method == 'DELETE':
        return delete_noise(id)



def noise(id):
    result = mongo.db.music.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "noise":result
    })
    return jsonify(res.get_response())


def new_noise(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    noise = mongo.db.noise
    if id == "new":
        _id = noise.insert_one({
            "cover" : "",
            "linkUrl" : "",
            "date":datetime.datetime.utcnow()
        })
        res = ResponseHandle({
            "id":str(_id.inserted_id)
        })
        return jsonify(res.get_response())
    else:
        raise InvalidUsage(status_code=500,payload=set_error(500,"wrong id"))


def update_noise(id):
    json = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    noise = mongo.db.noise
    noise.update_one({"_id":ObjectId(id)},{"$set":json})
    res = ResponseHandle({
        "message":"update succeess"
    })
    return jsonify(res.get_response())

def delete_noise(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    noise = mongo.db.noise
    noise.delete_one({"_id":ObjectId(id)})
    res = ResponseHandle({
        "message":"delete succeess"
    })
    return jsonify(res.get_response())