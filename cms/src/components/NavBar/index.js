import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { } = this.props
    return <div className={styles.NavBar}>
      <div>
        心冥想后台
    </div>
    </div>
  }
}

NavBar.propTypes = {
}

export default NavBar
