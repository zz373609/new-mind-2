from src.config.db_config import db
from sqlalchemy import types


class JsonLIst(types.TypeDecorator):
    impl = types.Text

    def process_bind_param(self, value, dialect):
        try:
            return json.dumps(value) if value is not None else json.dumps([])
        except:
            return value

    def process_result_value(self, value, dialect):
        try:
            return json.loads(value) if value else []
        except:
            return value


class JsonDict(types.TypeDecorator):
    impl = types.Text

    def process_bind_param(self, value, dialect):
        return json.dumps(value) if value is not None else json.dumps({})

    def process_result_value(self, value, dialect):
        return json.loads(value) if value else {}


class Product(db.Model):
    __tablename__ = 'product'
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.string(128))
	price = db.Column(db.string(128))
	description db.Column(db.text)
	params = db.Column(db.text)
	after_sell = db.Column(db.text)

class Article(db.Model):
	__tablename__ = 'article'
	id = db.Column(db.Integer, primary_key=True)
	cover_image = db.Column(db.string(128))
	content = db.Column(db.text)
	p_time = db.Column(db.datetime)
	
