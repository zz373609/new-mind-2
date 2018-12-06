import React, { Component } from 'react'
import styles from './index.scss'
const topImg = require('./image/topImg.png')
class TopBanner extends Component {
  render () {
    return (<div style={{ verticalAlign: 'middle' }}>
      <img src={topImg} style={{ width: '100%', display: 'block' }} />
    </div>)
  }
}
export default TopBanner
