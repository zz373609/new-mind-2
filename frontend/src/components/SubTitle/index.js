import React, { Component } from 'react'
import propTypes from 'prop-types'
class SubTitle extends Component {
  render () {
    const { title } = this.props
    return (<div style={{ borderBottom: '1px solid #cdcdcd' }}>
      <span style={{ fontSize: '16px', fontFamily: 'Helvetica', display: 'inline-block', marginBottom: 8 }} >
        {title}
      </span>
    </div>)
  }
}
SubTitle.propTypes = {
  title: propTypes.string
}
export default SubTitle
