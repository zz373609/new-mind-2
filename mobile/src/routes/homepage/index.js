import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { HomepageImage } from '../../components'
import { withRouter } from 'react-router'
import styles from './style/index.scss'
import './style/index.css'
import { Player } from 'video-react'
import { CSSTransition } from 'react-transition-group'
import { Modal, Icon } from 'antd'
const play = require('./image/play.png')
const play_black = require('./image/play_black.png')
import { ImageArray, videoList } from '../../utils/const'

function getIndex(index, length, type) {
  switch (type) {
    case 'left':
      if (index == 0) {
        return length - 1
      } else {
        return index - 1
      }
    case 'right':
      if (index + 1 == length) {
        return 0
      } else {
        return index + 1
      }
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoVisible: false,
      videoSrc: '',
      pictureVisible: false,
      pictureIndex: 0,
      imageSrc: [],
      animate: false
    }
  }

  componentDidMount() {

  }

  render() {
    const { homepage, history, dispatch } = this.props
    const { language, showProjectMenu } = homepage
    const { pictureIndex, pictureVisible, imageSrc } = this.state
    return <div className={styles.container}
      onMouseOver={() => {
        dispatch({
          type: 'homepage/updateState',
          payload: {
            key: 'showProjectMenu',
            value: false
          }
        })
      }}>
      <div>
        {
          ImageArray[language].map((item, index) => {
            return <HomepageImage key={index} onClick={() => {
              let key = item.replace('mo_', '')
              console.log(key)
              if (key && videoList[key]) {
                this.setState({
                  videoVisible: true,
                  videoSrc: videoList[key]
                })
              }
            }} src={`http://images.shinemeditation.cn/${item}.png`} />
          })
        }
      </div>
      <Modal
        className={styles['video-modal']}
        title={null}
        visible={this.state.videoVisible}
        transitionName='am-zoom'
        footer={null}
        closable={false}
        destroyOnClose
        maskClosable
        width='74vw'
        onCancel={() => {
          this.setState({
            videoVisible: false
          })
        }}
      >
        <Player>
          <source src={this.state.videoSrc} type='video/mp4' />
        </Player>
      </Modal>
    </div>
  }
}

HomePage.propTypes = {
  homepage: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(connect(state => state)(HomePage))
