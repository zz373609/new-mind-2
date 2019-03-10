from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import product_mock
from src.config.db_config import mongo
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle

import logging

product_bp = Blueprint(
    'product',
    __name__,
    url_prefix='/api/v1/product')


@product_bp.route('/all')
def products():
    data =  mongo.db.product.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    res = ResponseHandle({
        "products":result
    })
    return jsonify(res.get_response())

@product_bp.route('/<string:id>')
def product(id):
    result = mongo.db.product.find_one({"type":id})
    result["_id"] = str(result["_id"])
    res = ResponseHandle({
        "product":result
    })
    return jsonify(res.get_response())