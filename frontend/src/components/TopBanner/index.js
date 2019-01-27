import React, { Component } from 'react'
import styles from './index.scss'
import propTypes from 'prop-types'
class TopBanner extends Component {
  render() {
    const { src, dispatch } = this.props
    return (<div style={{ verticalAlign: 'middle' }}>
      <img src={src} style={{ width: '100%', display: 'block' }} />
    </div>)
  }
}
TopBanner.propTypes = {
  src: propTypes.string
}
export default TopBanner
