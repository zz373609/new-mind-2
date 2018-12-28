import React, { Component } from 'react'
import styles from './index.scss'
import propTypes from 'prop-types'
const topImg = require('./image/topImg.png')
class TopBanner extends Component {
  render () {
    const { src } = this.props
    return (<div style={{ verticalAlign: 'middle' }}>
      <img src={src || topImg} style={{ width: '100%', display: 'block' }} />
    </div>)
  }
}
TopBanner.propTypes = {
  src: propTypes.string
}
export default TopBanner
