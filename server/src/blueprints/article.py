from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import article_mock

article_bp = Blueprint(
    'article',
    __name__,
    url_prefix='/api/v1/article')


@article_bp.route('/all')
def articles():
    data = []
    for x in range(1, 10):
        p = article_mock
        p['id'] = x
        data.append(p)
    return jsonify(data)

@article_bp.route('/<int:id>')
def article(id):
    return jsonify(article_mock)