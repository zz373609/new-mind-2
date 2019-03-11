import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { Editor } from '../../components'

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { homepage, loading, history } = this.props
    return <div>
      <Editor />
    </div>
  }
}

EditPage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default EditPage
