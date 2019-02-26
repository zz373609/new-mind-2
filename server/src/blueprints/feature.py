from flask import Flask, request, jsonify, Response, Blueprint, render_template_string
from src.config.qiniu_config import access_key, secret_key
from qiniu import Auth

feature_bp = Blueprint(
    'feature',
    __name__,
    url_prefix='/api/v1/feature')


@feature_bp.route('/get_token')
def get_token():
    token = make_token()
    return jsonify({"token":token})

def make_token():
  q = Auth(access_key, secret_key)
  bucket_name = 'newmind'
  key = ''
  token = q.upload_token(bucket_name, key, 3600)
  return token