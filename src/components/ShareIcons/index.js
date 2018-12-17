import React, { Component } from 'react'
import propTypes from 'prop-types'
const qq = require('./image/qq.png')
const qq_black = require('./image/qq_black.png')
const wechat = require('./image/wechat.png')
const wechat_black = require('./image/wechat_black.png')
const friend = require('./image/friend.png')
const friend_black = require('./image/friend_black.png')
const weibo = require('./image/weibo.png')
const weibo_black = require('./image/weibo_black.png')
const link = require('./image/link.png')
const link_black = require('./image/link_black.png')
class ShareIcons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inIcon: null
    }
  }
  render () {
    return (<div style={{ width: 170, display: 'flex', justifyContent: 'space-between' }}>
      {[
        {
          normal: qq, hover: qq_black
        },
        {
          normal: wechat, hover: wechat_black
        },
        {
          normal: friend, hover: friend_black
        },
        {
          normal: weibo, hover: weibo_black
        },
        {
          normal: link, hover: link_black
        }
      ].map((i, index) => (
        <img style={{ height: 22, cursor: 'pointer' }} onMouseEnter={() => {
          this.setState({
            inIcon: index
          })
        }} onMouseLeave={() => {
          this.setState({
            inIcon: null
          })
        }} src={index === this.state.inIcon ? i.hover : i.normal} />
      ))}
    </div>)
  }
}
ShareIcons.propTypes = {

}
export default ShareIcons
