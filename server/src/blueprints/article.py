from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle

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

@article_bp.route('/<string:id>')
def article(id):
    result = mongo.db.article.find_one({"_id": ObjectId(id)})
    result['_id'] = str(result['_id'])
    res = ResponseHandle({
        "article":result
    })
    return jsonify(res.get_response())

