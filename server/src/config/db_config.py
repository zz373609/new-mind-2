from flask import Flask
from flask_sqlalchemy import SQLAlchemy

url = 'mysql+pymysql://root:zhiqiang1314@localhost:3306/{}?charset=utf8'

db = SQLAlchemy()