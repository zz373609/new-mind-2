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
              let key = item.image.replace('mo_', '')
              if (key && videoList[key]) {
                this.setState({
                  videoVisible: true,
                  videoSrc: videoList[key]
                })
              }
              if (item.modal.length) {
                this.setState({
                  imageSrc: item.modal,
                  pictureVisible: true
                })
              }
            }} src={`http://images.shinemeditation.cn/${item.image}.png`} />
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
      <Modal
        className={styles['picture-modal']}
        title={null}
        visible={pictureVisible}
        footer={null}
        closable={false}
        destroyOnClose
        width='70vw'
        onCancel={() => {
          this.setState({
            pictureVisible: false
          })
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '70vw', height: '70vh', position: 'relative' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Icon onClick={() => {
              this.setState({
                animate: true
              }, () => {
                this.setState({
                  pictureIndex: getIndex(this.state.pictureIndex, imageSrc.length, 'left'),
                  animate: false
                })
              })
            }} type='left' style={{ position: 'absolute', top: '50%', left: '-35px', color: 'white', fontSize: '40px', cursor: 'pointer' }} />
            <Icon onClick={() => {
              this.setState({
                animate: true
              }, () => {
                this.setState({
                  pictureIndex: getIndex(this.state.pictureIndex, imageSrc.length, 'right'),
                  animate: false
                })
              })
            }} type='right' style={{ position: 'absolute', top: '50%', right: '-35px', color: 'white', fontSize: '40px', cursor: 'pointer' }} />
            <CSSTransition
              in={this.state.animate}
              timeout={400}
              classNames='animate'
            >{
                state => (
                  <img
                    className={styles['modal-pic']}
                    src={this.state.imageSrc[pictureIndex]}
                    style={{ maxWidth: '100%', maxHeight: '100%' }} id='imageload'
                  />
                )
              }
            </CSSTransition>
            <Icon type='close' style={{ color: 'white', position: 'absolute', top: '70px', right: 0, cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  animate: true
                }, () => {
                  this.setState({
                    pictureVisible: false,
                    pictureIndex: 0,
                    animate: false
                  })
                })
              }} />
          </div>
          <ul style={{ display: 'flex', justifyContent: 'center', marginTop: 20, height: '12%', width: '100%' }} >
            {imageSrc.map((i, index) => (
              <div style={{ background: '#fff', height: '100%', cursor: 'pointer' }}
                onClick={() => {
                  this.setState({
                    animate: true
                  }, () => {
                    this.setState({
                      pictureIndex: index,
                      animate: false
                    })
                  })
                }}
              >
                <img style={{ height: '100%', padding: '2px', objectFit:'cover' }} src={i} />
              </div>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  }
}

HomePage.propTypes = {
  homepage: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(connect(state => state)(HomePage))
