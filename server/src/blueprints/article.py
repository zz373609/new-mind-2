from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle
import datetime

article_bp = Blueprint(
    'article',
    __name__,
    url_prefix='/api/v1/article')


@article_bp.route('/all')
def articles():
    data = mongo.db.article.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    res = ResponseHandle({
        "articles":result
    })
    return jsonify(res.get_response())

@article_bp.route('/<string:id>',methods=['GET','POST','PUT','DELETE'])
def operate_article(id):
    if request.method == 'GET':
        return article(id)
    elif request.method == 'POST':
        return articlenew(id)
    elif request.method == 'PUT':
        return update_article(id)
    elif request.method == 'DELETE':
        return delete_article(id)

def article(id):
    result = mongo.db.article.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "article":result
    })
    return jsonify(res.get_response())


def articlenew(id):
    data = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    article = mongo.db.article
    if id == "new":
        _id = article.insert_one({
            "title":"",
            "content":"",
            "date":datetime.datetime.utcnow()
        })
        print(_id.inserted_id)
        res = ResponseHandle({
            "id":str(_id.inserted_id)
        })
        print(res.get_response())
        return jsonify(res.get_response())


def update_article(id):
    json = request.json
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    article = mongo.db.article
    if 'title' in json or 'content' in json:
        article.update_one({ "_id": ObjectId(id) },{ "$set":json })
        res = ResponseHandle({
            "message":"update succeess"
        })
        return jsonify(res.get_response())
    else:
        raise InvalidUsage(status_code=500,payload=set_error(500,"update need both title or content"))
    

def delete_article(id):
    if not id:
        raise InvalidUsage(status_code=500,payload=set_error(500,"need id"))
    article = mongo.db.article
    article.delete_one({"_id":ObjectId(id)})
    res = ResponseHandle({
        "message":"delete succeess"
    })
    return jsonify(res.get_response())

