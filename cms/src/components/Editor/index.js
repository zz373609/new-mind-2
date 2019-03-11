import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKUpload from '../../utils/ckupload'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    this.setState({
      data: '<p>dsfg</p>'
    })
  }

  render() {
    const { } = this.props
    return <div className={styles.editor}>
      <CKEditor
        editor={ClassicEditor}
        data={this.state.data}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new CKUpload(loader)
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          this.setState({
            data
          })
          console.log({ event, editor, data })
        }}
        onBlur={editor => {
          console.log('Blur.', editor)
        }}
        onFocus={editor => {
          console.log('Focus.', editor)
        }}
      />
    </div>
  }
}

Editor.propTypes = {
}

export default Editor
