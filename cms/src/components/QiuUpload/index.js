import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { Upload, Icon } from 'antd'

class QiuUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { } = this.props
    return <div className={styles.QiuUpload}>
      <Upload
        className="avatar-uploader"
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
