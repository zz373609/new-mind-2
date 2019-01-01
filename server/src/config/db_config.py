from flask import Flask
from flask_sqlalchemy import SQLAlchemy

url = 'mysql+pymysql://root:zhiqiang1314@localhost:3306/newmind?charset=utf8'

db = SQLAlchemy()