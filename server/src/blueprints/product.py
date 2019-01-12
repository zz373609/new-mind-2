from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.mock.mock_data import product_mock
from src.config.db_config import mongo
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
    return jsonify(result)

@product_bp.route('/<string:id>')
def product(id):
    data = mongo.db.product.find_one({"type":id})
    logging.info(data)
    data["_id"] = str(data["_id"])
    return jsonify(data)