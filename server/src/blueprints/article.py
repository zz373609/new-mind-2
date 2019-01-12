from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import article_mock
from src.config.db_config import mongo

article_bp = Blueprint(
    'article',
    __name__,
    url_prefix='/api/v1/article')


@article_bp.route('/all')
def articles():
    data = []
    return jsonify(data)

@article_bp.route('/<int:id>')
def article(id):
    return jsonify(article_mock)