import React, { Component } from 'react'
import styles from './index.scss'
import propTypes from 'prop-types'
class HomepageImage extends Component {
  render () {
    const { src, percent } = this.props
    return <div style={{ width: percent, verticalAlign: 'middle' }}>
      <img style={{ width: percent, display: 'block' }} src={src} />
    </div>
  }
}
HomepageImage.propTypes = {
  src: propTypes.string,
  percent: propTypes.string
}
export default HomepageImage
