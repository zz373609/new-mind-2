from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.qiniu_config import access_key, secret_key
from qiniu import Auth
from src.util.error import InvalidUsage,set_error
from src.util.response import ResponseHandle

feature_bp = Blueprint(
    'feature',
    __name__,
    url_prefix='/api/v1/feature')


@feature_bp.route('/get_token')
def get_token():
    key = request.args.get('key')
    if not key:
      raise InvalidUsage(status_code=500,payload=set_error(500,"key is nessary"))
    token = make_token(key)
    res = ResponseHandle({
        "token":token
    })
    return jsonify(res.get_response())

def make_token(name):
    q = Auth(access_key, secret_key)
    bucket_name = 'newmind'
    key = name
    token = q.upload_token(bucket_name, key, 3600)
    return token