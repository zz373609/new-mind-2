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
const material1_main = 'http://images.shinemeditation.cn/WechatIMG123.png'
const top_center_zh = 'http://images.shinemeditation.cn/image/center/WechatIMG120.png'
const top_center_en = 'http://images.shinemeditation.cn/%E7%BD%91%E7%AB%99%E6%9B%B4%E6%94%B9%EF%BC%88%E8%8B%B1%E6%96%87%E7%89%88%EF%BC%89-02.png'
const u_zh = 'http://images.shinemeditation.cn/newchange.png'
const u_en = 'http://images.shinemeditation.cn/u-en.png'
const material1_show1 = 'http://images.shinemeditation.cn/image/homepage/material1/img1.jpg'
const material1_show2 = 'http://images.shinemeditation.cn/image/homepage/material1/img2.jpg'
const material1_show3 = 'http://images.shinemeditation.cn/image/homepage/material1/img3.jpg'
const material1_show4 = 'http://images.shinemeditation.cn/image/homepage/material1/img4.jpg'
const material1_show5 = 'http://images.shinemeditation.cn/image/homepage/material1/img5.jpg'
const material2_zh = 'http://images.shinemeditation.cn/image/homepage/material2/main_zh.png'
const material2_en = 'http://images.shinemeditation.cn/image/png/change/en/22.png'
const material2_show1 = 'http://images.shinemeditation.cn/image/homepage/material2/img1.jpg'
const material2_show2 = 'http://images.shinemeditation.cn/image/homepage/material2/img2.jpg'
const material3_left_zh = 'http://images.shinemeditation.cn/WechatIMG31.png'
const material3_left_en = 'http://images.shinemeditation.cn/image/png/change/en/1.png'
const material3_middle = 'http://images.shinemeditation.cn/image/zh/change/7.png'
const material3_right_zh = 'http://images.shinemeditation.cn/image/zh/change/6.png'
const material3_right_en = 'http://images.shinemeditation.cn/image/png/change/en/2.png'
const transition1 = 'http://images.shinemeditation.cn/1banner.png'
const transition2_zh = 'http://images.shinemeditation.cn/award_banner.png'
const transition2_en = 'http://images.shinemeditation.cn/awrad_en.png'
const transition3_en = 'http://images.shinemeditation.cn/banner.png'
const transition4 = 'http://images.shinemeditation.cn/image/homepage/transition/img4.png'
const transition5_zh = 'http://images.shinemeditation.cn/image/homepage/transition/img5_zh.png'
const transition5_en = 'http://images.shinemeditation.cn/image/homepage/transition/img5_zh.png'
const transition6_zh = 'http://images.shinemeditation.cn/sencise_zh.png'
const transition6_en = 'http://images.shinemeditation.cn/sencise_en.png'
const transition7_zh = 'http://images.shinemeditation.cn/WechatIMG113.png'
const transition7_en = 'http://images.shinemeditation.cn/early.png'
const transition8_zh = 'http://images.shinemeditation.cn/time_zh.png'
const transition8_en = 'http://images.shinemeditation.cn/time_en.png'
const transition9 = 'http://images.shinemeditation.cn/25.png'
const transition10_zh = 'http://images.shinemeditation.cn/WechatIMG139.png'
const transition10_en = 'http://images.shinemeditation.cn/space_en.png'
const transition11 = 'http://images.shinemeditation.cn/last.png'
const transition12 = 'http://images.shinemeditation.cn/midbefore.png'
const transition13 = 'http://images.shinemeditation.cn/last.png'
const transition14_zh = 'http://images.shinemeditation.cn/haiwai.png'
const transition14_en = 'http://images.shinemeditation.cn/haiwai_en.png'
const transition15 = 'http://images.shinemeditation.cn/miding.png'
const transition16_zh = 'http://images.shinemeditation.cn/image/homepage/transition/img16_zh.png'
const transition16_en = 'http://images.shinemeditation.cn/image/homepage/transition/img16_en.png'
const transition17 = 'http://images.shinemeditation.cn/mid.png'
const fullpageVideo = 'http://images.shinemeditation.cn/video_first.png'
const material4 = 'http://images.shinemeditation.cn//image/main/WechatIMG36.png'
const material4_show1 = 'http://images.shinemeditation.cn/image/homepage/material4/img1.jpg'
const material4_show2 = 'http://images.shinemeditation.cn/image/homepage/material4/img2.jpg'
const material4_show3 = 'http://images.shinemeditation.cn/image/homepage/material4/img3.jpg'
const material4_show4 = 'http://images.shinemeditation.cn/material4_show4.jpg'
const material5_zh = 'http://images.shinemeditation.cn/if_zh.png'
const material5_en = 'http://images.shinemeditation.cn/if_en.png'
const material5_show1 = 'http://images.shinemeditation.cn/image/homepage/material5/img1.jpg'
const material5_show2 = 'http://images.shinemeditation.cn/image/homepage/material5/img2.jpg'
const material5_show3 = 'http://images.shinemeditation.cn/image/homepage/material5/img3.jpg'
const award_zh = 'http://images.shinemeditation.cn/first_awrad_zh.png'
const award_en = 'http://images.shinemeditation.cn/first_awrad_en.png'
const material6_zh = 'http://images.shinemeditation.cn/second_award_zh.png'
const material6_en = 'http://images.shinemeditation.cn/second_awrad_en.png'
const material6_show1 = 'http://images.shinemeditation.cn/image/homepage/material6/img1.jpg'
const material6_show2 = 'http://images.shinemeditation.cn/image/homepage/material6/img2.jpg'
const material7_zh = 'http://images.shinemeditation.cn/third_zh.png'
const material7_en = 'http://images.shinemeditation.cn/third_en.png'
const material7_show1 = 'http://images.shinemeditation.cn/image/homepage/material7/img1.jpg'
const material7_show2 = 'http://images.shinemeditation.cn/image/homepage/material7/img2.jpg'
const material7_show3 = 'http://images.shinemeditation.cn/image/homepage/material7/img3.jpg'
const material7_show4 = 'http://images.shinemeditation.cn/image/homepage/material7/img4.jpg'
const material8_zh = 'http://images.shinemeditation.cn/ted_zh.png'
const material8_en = 'http://images.shinemeditation.cn/ted.png'
const material8_show1 = 'http://images.shinemeditation.cn/image/homepage/material8/img1.jpg'
const material8_show2 = 'http://images.shinemeditation.cn/image/homepage/material8/img2.jpg'
const fog = 'http://images.shinemeditation.cn/air.png'
const brain1 = 'http://images.shinemeditation.cn/brain_zh.png'
const brain2_zh = 'http://images.shinemeditation.cn/effect_zh.png'
const brain2_en = 'http://images.shinemeditation.cn/effect_en.png'
const brain3_zh = 'http://images.shinemeditation.cn/brain3_zh.png'
const brain3_en = 'http://images.shinemeditation.cn/brain3_en.png'
const brain4_en = 'http://images.shinemeditation.cn/brain4_en.png'
const brain4_zh = 'http://images.shinemeditation.cn/brain4_zh.png'
const land1 = 'http://images.shinemeditation.cn/land.png'
const land2 = 'http://images.shinemeditation.cn/tree.png'
const material9 = 'http://images.shinemeditation.cn/first.png'
const material9_show1 = 'http://images.shinemeditation.cn/image/homepage/material9/img1.png'
const space1_zh = 'http://images.shinemeditation.cn/fire_zh.png'
const space1_en = 'http://images.shinemeditation.cn/fire_en.png'
const space2_zh = 'http://images.shinemeditation.cn/montain_zh.png'
const space2_en = 'http://images.shinemeditation.cn/motain_en.png'
const material10 = 'http://images.shinemeditation.cn/not_show_main.png'
const material10_show1 = 'http://images.shinemeditation.cn/image/homepage/material10/img1.png'
const material11 = 'http://images.shinemeditation.cn/wave.png'
const material11_show1 = 'http://images.shinemeditation.cn/image/homepage/material11/img1.jpg'
const material11_show2 = 'http://images.shinemeditation.cn/image/homepage/material11/img2.jpg'
const material11_show3 = 'http://images.shinemeditation.cn/image/homepage/material11/img3.jpg'
const space3_zh = 'http://images.shinemeditation.cn/duck_zh.png'
const space3_en = 'http://images.shinemeditation.cn/duck_en.png'
const video_left_zh = 'http://images.shinemeditation.cn/left_video_zh.png'
const video_left_en = 'http://images.shinemeditation.cn/right_video_en.png'
const video_right_zh = 'http://images.shinemeditation.cn/vi_zh.png'
const video_right_en = 'http://images.shinemeditation.cn/vi_en.png'
const people = 'http://images.shinemeditation.cn/peopel.png'
const sand = 'http://images.shinemeditation.cn/image/zh/change/11.png'
const bottom_left_video = 'http://images.shinemeditation.cn/video/mp4/bottom_left.mp4bottom_left.mp4'
const bottom_right_video = 'http://images.shinemeditation.cn/video/mp4/bottom_right.mp4bottom_right.mp4'

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
        <div style={{ display: 'flex', height: '20%' }}>
          <div style={{}}>
            <div style={{ display: 'flex' }}>
              <HomepageImage src={material1_main}
                buy_link
                history={history}
                buy_go={'/project/seat'}
                postion={'right'}
                language={language}
                onClick={() => {
                  this.setState({
                    pictureVisible: true,
                    imageSrc: [material1_show2, material1_show3, material1_show4]
                  })
                }}
              />
              <HomepageImage src={language == 'zh' ? top_center_zh : top_center_en} />
            </div>
            <div style={{ display: 'flex' }}>
              <HomepageImage src={language == 'zh' ? u_zh : u_en} />
              <HomepageImage
                buy_link
                history={history}
                language={language}
                buy_go={'/project/desk'}
                postion={'left'} src={'http://images.shinemeditation.cn//image/right/WechatIMG121.png'}
                onClick={() => {
                  this.setState({
                    pictureVisible: true,
                    imageSrc: [material2_show1, material2_show2]
                  })
                }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex' }}>
              <HomepageImage src={'http://images.shinemeditation.cn//image/stay/stay.png'} />
            </div>
          </div>
        </div>
        <HomepageImage src={transition1} percent='100%' />
        <div onClick={() => {
          this.setState({
            fullVideoVisible: true
          })
        }}><HomepageImage src={fullpageVideo} percent='100%' /></div>
        <HomepageImage id='award' src={language === 'zh' ? transition2_zh : transition2_en} percent='100%' />
        <div style={{ display: 'flex' }}>
          <HomepageImage
            onClick={() => {
              this.setState({
                pictureVisible: true,
                imageSrc: [material4_show1, material4_show2, material4_show3, material4_show4]
              })
            }}
            src={material4} percent='50%' />
          <HomepageImage
            onClick={() => {
              this.setState({
                pictureVisible: true,
                imageSrc: [material5_show1, material5_show2, material5_show3]
              })
            }}
            src={language === 'zh' ? material5_zh : material5_en} percent='50%' />
        </div>
        <HomepageImage src={transition3_en} percent='100%' />
      </div>
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? award_zh : award_en} percent='50%' />
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material6_show1, material6_show2]
            })
          }}
          src={language === 'zh' ? material6_zh : material6_en} percent='50%' />
      </div>
      <div style={{ display: 'flex' }}>
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material7_show1, material7_show4, material7_show2, material7_show3]
            })
          }}
          src={language === 'zh' ? material7_zh : material7_en} percent='50%' />
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material8_show1, material8_show2]
            })
          }}
          src={language === 'zh' ? material8_zh : material8_en} percent='50%' />
      </div>
      <HomepageImage src={transition4} percent='100%' />
      <HomepageImage src={fog} percent='100%' />
      <HomepageImage src={language == 'zh' ? transition6_zh : transition6_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={brain1} percent='50%' />
        <HomepageImage src={language === 'zh' ? brain2_zh : brain2_en} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition7_zh : transition7_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? brain3_zh : brain3_en} percent='50%' />
        <HomepageImage src={language == 'zh' ? brain4_zh : brain4_en} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition8_zh : transition8_en} percent='100%' />
      <HomepageImage src={transition9} percent='100%' />
      <HomepageImage src={land1} percent='100%' />
      <HomepageImage id='space' src={language === 'zh' ? transition10_zh : transition10_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material9_show1]
            })
          }}
          src={material9} percent='50%' />
        <HomepageImage src={language === 'zh' ? space1_zh : space1_en} percent='50%' />
      </div>
      <HomepageImage src={transition11} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? space2_zh : space2_en} percent='50%' />
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material10_show1]
            })
          }}
          src={material10} percent='50%' />
      </div>
      <HomepageImage src={transition12} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage
          onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material11_show1, material11_show2, material11_show3]
            })
          }}
          src={material11} percent='50%' />
        <HomepageImage src={language === 'zh' ? space3_zh : space3_en} percent='50%' />
      </div>
      <HomepageImage src={transition13} percent='100%' />
      <HomepageImage src={land2} percent='100%' />
      <HomepageImage id='overseas' src={language === 'zh' ? transition14_zh : transition14_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <div style={{ cursor: 'pointer', width: '50%', position: 'relative' }} onClick={() => {
          this.setState({
            videoSrc: bottom_left_video,
            videoVisible: true
          })
        }}>
          <HomepageImage src={language === 'zh' ? video_left_zh : video_left_en} percent='100%' />
          <img style={{ position: 'absolute', width: '10%', top: '50%', left: '30%', transform: 'translateY(-50%)' }} src={this.state.activePlay === 'left' ? play_black : play} onMouseEnter={() => {
            this.setState({
              activePlay: 'left'
            })
          }} onMouseLeave={() => {
            this.setState({
              activePlay: null
            })
          }}
          />
        </div>
        <div style={{ cursor: 'pointer', width: '50%', position: 'relative' }} onClick={() => {
          this.setState({
            videoSrc: bottom_right_video,
            videoVisible: true
          })
        }}>
          <HomepageImage src={language === 'zh' ? video_right_zh : video_right_en} percent='100%' />
          <img style={{ position: 'absolute', width: '10%', top: '50%', left: '30%', transform: 'translateY(-50%)' }} src={this.state.activePlay === 'right' ? play_black : play} onMouseEnter={() => {
            this.setState({
              activePlay: 'right'
            })
          }} onMouseLeave={() => {
            this.setState({
              activePlay: null
            })
          }}
          />
        </div>
      </div>
      <HomepageImage src={transition15} percent='100%' />
      <HomepageImage src={people} percent='100%' />
      <HomepageImage src={transition17} percent='100%' />
      <Modal
        className={styles['video-modal']}
        title={null}
        visible={this.state.videoVisible}
        transitionName="am-zoom"
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
            pictureVisible: false,
            pictureIndex: 0
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
            <Icon type='close' style={{ color: 'white', position: 'absolute', top: '-20px', right: 0, cursor: 'pointer' }}
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
          <ul style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20, height: '12%', maxWidth: '100%' }} >
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
                <img style={{ height: '100%', padding: '2px' }} src={i} />
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
