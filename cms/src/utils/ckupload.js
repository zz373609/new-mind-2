import * as qiniu from 'qiniu-js'
import { uuid } from '../utils/func'
import { getToken } from '../services/server'
class CKUpload {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  async upload() {
    let res = await this.loader.file
    let key = uuid(8, 16)
    let result = await getToken(key)
    let file = await this.getFile(res, key, result)
    return {
      default: 'http://images.shinemeditation.cn/' + file.key
    }
  }

  getFile(res, key, result) {
    var observable = qiniu.upload(res, key, result.data.token)
    return new Promise((resolve, reject) => {
      observable.subscribe({
        next(res) {
          console.log(res)
        },
        error(err) {
          // ...
        },
        complete(res) {
          resolve(res)
        }
      })
    })
  }

  // Aborts the upload process.
  abort() {
  }
}

export default CKUpload