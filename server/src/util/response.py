class ResponseHandle:

    def __init__(self,payload=None):
        self.status = 'success'
        self.payload = payload

    def get_response(self):
        res = dict(self.payload or ())
        response = {
            "status":self.status,
            "data":self.payload
        }
        return response