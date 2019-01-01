from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import product_mock

product_bp = Blueprint(
    'product',
    __name__,
    url_prefix='/api/v1/product')


@product_bp.route('/all')
def products():
    data = []
    for x in range(1, 10):
        p = product_mock
        p['id'] = x
        data.append(p)
    return jsonify(data)

@product_bp.route('/<int:id>')
def product(id):
    return jsonify(product_mock)