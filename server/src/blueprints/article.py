from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from bson.objectid import ObjectId

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
    return jsonify(result)

@article_bp.route('/<string:id>')
def article(id):
    data = mongo.db.article.find_one({"_id": ObjectId(id)})
    data['_id'] = str(data['_id'])
    return jsonify(data)