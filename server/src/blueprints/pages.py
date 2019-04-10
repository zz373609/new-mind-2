from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.db_config import mongo
from flask_restful import reqparse
from bson.objectid import ObjectId
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle
from src.util.validate_parse import ValidateParse
import datetime

page_bp = Blueprint(
    'page',
    __name__,
    url_prefix='/api/v1/page')


@page_bp.route('/all')
def pages():
    data = mongo.db.page.find()
    result = []
    for item in data:
        item["_id"] = str(item["_id"])
        result.append(item)
    res = ResponseHandle({
        "pages":result
    })
    return jsonify(res.get_response())