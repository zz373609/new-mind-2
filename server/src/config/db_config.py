from flask_pymongo import PyMongo
import urllib

url = 'mongodb://zzq:' + urllib.parse.quote("Zhiqiang1314!@#") + '@shinemeditation.cn:27017/newmind?authSource=admin'

mongo = PyMongo()