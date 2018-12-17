import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { HomepageImage, ProjectMenu } from '../../components'
import { withRouter } from 'react-router'
import styles from './style/index.scss'
import { Player } from 'video-react'
import { Modal, Icon } from 'antd'
const material1_main = require('./image/material1/main.png')
const material1_show1 = require('./image/material1/img1.jpg')
const material1_show2 = require('./image/material1/img2.jpg')
const material1_show3 = require('./image/material1/img3.jpg')
const material1_show4 = require('./image/material1/img4.jpg')
const material1_show5 = require('./image/material1/img5.jpg')
const material2_zh = require('./image/material2/main_zh.png')
const material2_en = require('./image/material2/main_en.png')
const material2_show1 = require('./image/material2/img1.jpg')
const material2_show2 = require('./image/material2/img2.jpg')
const material3_left_zh = require('./image/material3/left_zh.png')
const material3_left_en = require('./image/material3/left_en.png')
const material3_middle_zh = require('./image/material3/middle_zh.png')
const material3_middle_en = require('./image/material3/middle_en.png')
const material3_right_zh = require('./image/material3/right_zh.png')
const material3_right_en = require('./image/material3/right_en.png')
const transition1 = require('./image/transition/img1.png')
const transition2_zh = require('./image/transition/img2_zh.png')
const transition3_zh = require('./image/transition/img3_zh.png')
const transition4 = require('./image/transition/img4.png')
const transition5_zh = require('./image/transition/img5_zh.png')
const transition6 = require('./image/transition/img6.png')
const transition7_zh = require('./image/transition/img7_zh.png')
const transition7_en = require('./image/transition/img7_en.png')
const transition8_zh = require('./image/transition/img8_zh.png')
const transition8_en = require('./image/transition/img8_en.png')
const transition9 = require('./image/transition/img9.png')
const transition10_zh = require('./image/transition/img10_zh.png')
const transition10_en = require('./image/transition/img10_en.png')
const transition11 = require('./image/transition/img11.png')
const transition12 = require('./image/transition/img12.png')
const transition13 = require('./image/transition/img13.png')
const transition14_zh = require('./image/transition/img14_zh.png')
const transition14_en = require('./image/transition/img14_en.png')
const transition15 = require('./image/transition/img15.png')
const transition16_zh = require('./image/transition/img16_zh.png')
const transition16_en = require('./image/transition/img16_en.png')
const transition17 = require('./image/transition/img17.png')
const fullpageVideo = require('./image/other/video1.png')
const material4 = require('./image/material4/main_en.png')
const material4_show1 = require('./image/material4/img1.jpg')
const material4_show2 = require('./image/material4/img2.jpg')
const material4_show3 = require('./image/material4/img3.jpg')
const material5_zh = require('./image/material5/main_zh.png')
const material5_en = require('./image/material5/main_en.png')
const material5_show1 = require('./image/material5/img1.jpg')
const material5_show2 = require('./image/material5/img2.jpg')
const material5_show3 = require('./image/material5/img3.jpg')
const award_zh = require('./image/other/award_zh.png')
const award_en = require('./image/other/award_en.png')
const material6_zh = require('./image/material6/main_zh.png')
const material6_show1 = require('./image/material6/img1.jpg')
const material6_show2 = require('./image/material6/img2.jpg')
const material7_zh = require('./image/material7/main_zh.png')
const material7_en = require('./image/material7/main_en.png')
const material7_show1 = require('./image/material7/img1.jpg')
const material7_show2 = require('./image/material7/img2.jpg')
const material7_show3 = require('./image/material7/img3.jpg')
const material7_show4 = require('./image/material7/img4.jpg')
const material8_zh = require('./image/material8/main_zh.png')
const material8_en = require('./image/material8/main_en.png')
const material8_show1 = require('./image/material8/img1.jpg')
const material8_show2 = require('./image/material8/img2.jpg')
const fog = require('./image/other/fog.png')
const brain1 = require('./image/other/brain1.png')
const brain2_zh = require('./image/other/brain2_zh.png')
const brain2_en = require('./image/other/brain2_en.png')
const brain3_zh = require('./image/other/brain3_zh.png')
const brain3_en = require('./image/other/brain3_en.png')
const brain4 = require('./image/other/brain4.png')
const land1 = require('./image/other/land1.png')
const land2 = require('./image/other/land2.png')
const material9 = require('./image/material9/main_en.png')
const material9_show1 = require('./image/material9/img1.png')
const space1_zh = require('./image/other/space1_zh.png')
const space1_en = require('./image/other/space1_en.png')
const space2_zh = require('./image/other/space2_zh.png')
const space2_en = require('./image/other/space2_en.png')
const material10 = require('./image/material10/main_en.png')
const material10_show1 = require('./image/material10/img1.png')
const material11 = require('./image/material11/main_en.png')
const material11_show1 = require('./image/material11/img1.jpg')
const material11_show2 = require('./image/material11/img2.jpg')
const material11_show3 = require('./image/material11/img3.jpg')
const space3_zh = require('./image/other/space3_zh.png')
const space3_en = require('./image/other/space3_en.png')
const video_left_zh = require('./image/other/video_left_zh.png')
const video_left_en = require('./image/other/video_left_en.png')
const video_right_zh = require('./image/other/video_right_zh.png')
const video_right_en = require('./image/other/video_right_en.png')
const people = require('./image/other/people.png')
const sand = require('./image/other/sand.png')
import bottom_left_video from './video/bottom_left.mp4'
import bottom_right_video from './video/bottom_right.mp4'
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoVisible: false,
      videoSrc: '',
      pictureVisible: false,
      pictureIndex: 0,
      imageSrc: []
    }
  }

  render () {
    const { homepage, history } = this.props
    const { language, showProjectMenu } = homepage
    const { pictureIndex, pictureVisible, imageSrc } = this.state
    return <div className={styles.container}>
      <div>
        <div style={{ display: 'flex' }}>
          <HomepageImage onClick={() => {
            this.setState({
              pictureVisible: true,
              imageSrc: [material1_show1, material1_show2, material1_show3, material1_show4, material1_show5]
            })
          }} src={material1_main} percent='50%' />
          <HomepageImage
            onClick={() => {
              this.setState({
                pictureVisible: true,
                imageSrc: [material2_show1, material2_show2]
              })
            }}
            src={language === 'zh' ? material2_zh : material2_en} percent='50%'
          />
        </div>
        <div style={{ display: 'flex' }}>
          <HomepageImage src={language === 'zh' ? material3_left_zh : material3_left_en} percent='33.3333%' />
          <HomepageImage src={language === 'zh' ? material3_middle_zh : material3_middle_en} percent='33.3333%' />
          <HomepageImage src={language === 'zh' ? material3_right_zh : material3_right_en} percent='33.3333%' />
        </div>
        <HomepageImage src={transition1} percent='100%' />
        <div onClick={() => {
          this.setState({
            fullVideoVisible: true
          })
        }}><HomepageImage src={fullpageVideo} percent='100%' /></div>
        <HomepageImage src={language === 'zh' ? transition2_zh : transition2_en} percent='100%' />
        <div style={{ display: 'flex' }}>
          <HomepageImage
            onClick={() => {
              this.setState({
                pictureVisible: true,
                imageSrc: [material4_show1, material4_show2, material4_show3]
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
        <HomepageImage src={language === 'zh' ? transition3_zh : transition3_en} percent='100%' />
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
              imageSrc: [material7_show1, material7_show2, material7_show3, material7_show4]
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
      <HomepageImage src={language === 'zh' ? transition5_zh : transition5_en} percent='100%' />
      <HomepageImage src={transition6} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={brain1} percent='50%' />
        <HomepageImage src={language === 'zh' ? brain2_zh : brain2_en} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition7_zh : transition7_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? brain3_zh : brain3_en} percent='50%' />
        <HomepageImage src={brain4} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition8_zh : transition8_en} percent='100%' />
      <HomepageImage src={transition9} percent='100%' />
      <HomepageImage src={land1} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition10_zh : transition10_en} percent='100%' />
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
      <HomepageImage src={language === 'zh' ? transition14_zh : transition14_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <div style={{ cursor: 'pointer', width: '50%' }} onClick={() => {
          this.setState({
            videoSrc: bottom_left_video,
            videoVisible: true
          })
        }}>
          <HomepageImage src={language === 'zh' ? video_left_zh : video_left_en} percent='100%' />
        </div>
        <div style={{ cursor: 'pointer', width: '50%' }} onClick={() => {
          this.setState({
            videoSrc: bottom_right_video,
            videoVisible: true
          })
        }}>
          <HomepageImage src={language === 'zh' ? video_right_zh : video_right_en} percent='100%' />
        </div>
      </div>
      <HomepageImage src={transition15} percent='100%' />
      <HomepageImage src={people} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition16_zh : transition16_en} percent='100%' />
      <HomepageImage src={sand} percent='100%' />
      <HomepageImage src={transition17} percent='100%' />
      <Modal
        className={styles['video-modal']}
        title={null}
        visible={this.state.videoVisible}
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
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className={styles['modal-pic']} src={this.state.imageSrc[pictureIndex]} style={{ maxWidth: '100%', maxHeight: '100%', boxShadow: '0 10vh 10vh #000' }} />
            <Icon type='close' style={{ color: 'white', position: 'absolute', top: '-20px', right: 0, cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  pictureVisible: false,
                  pictureIndex: 0
                })
              }} />
          </div>
          <ul style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20, height: '12%', maxWidth: '100%' }} >
            {imageSrc.map((i, index) => (
              <div style={{ background: '#fff', height: '100%', cursor: 'pointer' }}
                onClick={() => {
                  this.setState({
                    pictureIndex: index
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
