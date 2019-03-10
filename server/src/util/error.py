class InvalidUsage(Exception):
    status_code = 400

    def __init__(self,status_code=None, payload=None):
        Exception.__init__(self)
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        return rv

def set_error(code,message):
	return {
		"status":"fail",
		"error":{
			"error_code":code,
			"error_ message":message
		}
	}