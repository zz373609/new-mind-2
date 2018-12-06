import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'

@connect(state => ({
  loading: state.loading
}))
class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { history } = this.props
    return <div style={{ width: '100vw', margin: '0 auto' }}>
      Contact
    </div>
  }
}

Contact.propTypes = {
  history: PropTypes.object
}
export default Contact
