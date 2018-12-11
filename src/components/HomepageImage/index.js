import React, { Component } from 'react'
import styles from './index.scss'
import propTypes from 'prop-types'
class HomepageImage extends Component {
  render () {
    const { src, percent, onClick } = this.props
    return <div onClick={onClick} style={{ width: percent, verticalAlign: 'middle' }}>
      <img style={{ width: '100%', display: 'block' }} src={src} />
    </div>
  }
}
HomepageImage.propTypes = {
  src: propTypes.string,
  percent: propTypes.string,
  onClick: propTypes.func
}
export default HomepageImage
