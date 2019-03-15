from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from flask_restful import reqparse
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle
from src.util.validate_parse import ValidateParse
import datetime

news_bp = Blueprint(
    'news',
    __name__,
    url_prefix='/api/v1/news')


@news_bp.route('/all')
def newses():
    data = mongo.db.news.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    res = ResponseHandle({
        "newses":result
    })
    return jsonify(res.get_response())

@news_bp.route('/<string:id>', methods=['GET','POST','PUT','DELETE'])
def operate_music(id):
    if request.method == 'GET':
        return news(id)
    elif request.method == 'POST':
        return new_news(id)
    elif request.method == 'PUT':
        return update_news(id)
    elif request.method == 'DELETE':
        return delete_news(id)



def news(id):
    result = mongo.db.news.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "news":result
    })
    return jsonify(res.get_response())


def new_news(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    news = mongo.db.news
    if id == "new":
        _id = news.insert_one({
            "content" : "new",
            "cover" : "",
            "date":None
        })
        res = ResponseHandle({
            "id":str(_id.inserted_id)
        })
        return jsonify(res.get_response())
    else:
        raise InvalidUsage(status_code=500,payload=set_error(500,"wrong id"))


def update_news(id):
    json = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    news = mongo.db.news
    news.update_one({"_id":ObjectId(id)},{"$set":json})
    res = ResponseHandle({
        "message":"update succeess"
    })
    return jsonify(res.get_response())

def delete_news(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    news = mongo.db.news
    news.delete_one({"_id":ObjectId(id)})
    res = ResponseHandle({
        "message":"delete succeess"
    })
    return jsonify(res.get_response())