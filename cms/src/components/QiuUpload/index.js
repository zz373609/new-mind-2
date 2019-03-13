import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { Upload, Icon } from 'antd'
import { getToken } from '../../services/server'
import { uuid } from '../../utils/func'
import * as qiniu from 'qiniu-js'

class QiuUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.beforeUpload = this.beforeUpload.bind(this)
  }

  async beforeUpload (file) {
    let key = uuid(16, 16)
    let result = await getToken(key)
    let res = await this.getFile(file, key, result)
    this.props.getUrl('http://images.shinemeditation.cn/' + res.key)
    return false
  }

  getFile (res, key, result) {
    var observable = qiniu.upload(res, key, result.data.token)
    return new Promise((resolve, reject) => {
      observable.subscribe({
        next(res) {
          console.log(res)
        },
        error(err) {
          console.log(err)
        },
        complete(res) {
          resolve(res)
        }
      })
    })
  }

  render() {
    const { getUrl } = this.props
    return <div className={styles.QiuUpload}>
      <Upload
        className='avatar-uploader'
        beforeUpload={this.beforeUpload}
        fileList={null}
      >
        <UploadButton />
      </Upload>
    </div>
  }
}

const UploadButton = ({ }) => {
  return <div className={styles.upbutton}>
    <Icon type='plus' style={{ fontSize: '32px' }} />
  </div>
}

QiuUpload.propTypes = {
}

export default QiuUpload
