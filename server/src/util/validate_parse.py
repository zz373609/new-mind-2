from flask_restful.reqparse import RequestParser
from src.util.error import InvalidUsage,set_error

class ValidateParse(RequestParser):

    def parse_source(self, source):
            """直接校验来源"""
            for arg in self.args:
                value = source.get(arg.name)
                if value is None and arg.required:
                    raise InvalidUsage(status_code=500,payload=set_error(500,"{} cant not be empty".format(arg.name)))
