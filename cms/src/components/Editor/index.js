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
  }

  componentDidMount() {

  }

  render() {
    const { data, onChange } = this.props
    return <div className={styles.editor}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onInit={editor => {
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new CKUpload(loader)
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          onChange(data)
          // console.log({ event, editor, data })
        }}
        onBlur={editor => {
          // console.log('Blur.', editor)
        }}
        onFocus={editor => {
          // console.log('Focus.', editor)
        }}
      />
    </div>
  }
}

Editor.propTypes = {
}

export default Editor
