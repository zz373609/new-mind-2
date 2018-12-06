import React, { Component } from 'react'
import styles from './index.scss'
const bottomImg = require('./image/bottomImg.png')
class BottomNav extends Component {
  render () {
    return (<div style={{ verticalAlign: 'middle' }}>
      <img src={bottomImg} style={{ width: '100%', display: 'block' }} />
    </div>)
  }
}
export default BottomNav
