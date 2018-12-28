import React, { Component } from 'react'
import propTypes from 'prop-types'
class HomepageImage extends Component {
  render () {
    const { src, percent, onClick, id } = this.props
    return <div id={id} onClick={onClick} style={{ width: percent, verticalAlign: 'middle' }}>
      <img style={{ width: '100%', display: 'block' }} src={src} />
    </div>
  }
}
HomepageImage.propTypes = {
  src: propTypes.string,
  percent: propTypes.string,
  onClick: propTypes.func,
  id: propTypes.string
}
export default HomepageImage
