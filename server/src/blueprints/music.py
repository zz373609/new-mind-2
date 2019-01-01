from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import music_mock

music_bp = Blueprint(
    'music',
    __name__,
    url_prefix='/api/v1/music')


@music_bp.route('/all')
def musics():
    data = []
    for x in range(1, 10):
        p = music_mock
        p['id'] = x
        data.append(p)
    return jsonify(data)

@music_bp.route('/<int:id>')
def music(id):
    return jsonify(music_mock)