from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo

article_bp = Blueprint(
    'article',
    __name__,
    url_prefix='/api/v1/article')


@article_bp.route('/all')
def articles():
    data = mongo.db.article.find()
    result = []
    for item in data:
        result.append(item)
    return jsonify(result)

@article_bp.route('/<int:id>')
def article(id):
    data = mongo.db.article.find_one({"type": id})
    return jsonify(data)
