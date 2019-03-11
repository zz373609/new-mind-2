import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import styles from './style/index.scss'
import { Product } from '../../components'

@connect(state => state)
class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { history, match, homepage } = this.props
    const { language } = homepage
    return <div style={{
      margin: '0 auto',
      background: '#fff'
    }}>
      <div>
        <Product productone={homepage.productone} language={homepage.language}/>
      </div>
    </div>
  }
}

Project.propTypes = {
  history: PropTypes.object
}
export default Project
