import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { SubTitle } from '../../components'

@connect(state => state)
class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { history } = this.props
    return <div style={{
      width: '68.25%',
      margin: '0 auto',
      background: '#fff',
      padding: '86px 7.45%'
    }}>
      <div style={{ width: '100%' }}>
        <SubTitle title='联系我们' />
      </div>
    </div>
  }
}

Contact.propTypes = {
  history: PropTypes.object
}
export default Contact
