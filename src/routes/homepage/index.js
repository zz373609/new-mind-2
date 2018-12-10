import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { HomepageImage, ProjectMenu } from '../../components'
import { withRouter } from 'react-router'
import styles from './style/index.scss'
import { Player } from 'video-react'
import { Modal } from 'antd'
const material1 = require('./image/material1/main.png')
const material1_show1 = require('./image/material1/img1.jpg')
const material1_show2 = require('./image/material1/img2.jpg')
const material1_show3 = require('./image/material1/img3.jpg')
const material1_show4 = require('./image/material1/img4.jpg')
const material1_show5 = require('./image/material1/img5.jpg')
const material2_zh = require('./image/material2/main_zh.png')
const material2_en = require('./image/material2/main_en.png')
const material2_show1_zh = require('./image/material2/img1.jpg')
const material2_show1_en = material2_show1_zh
const material2_show2_zh = require('./image/material2/img2.jpg')
const material2_show2_en = material2_show1_zh
const material3_left_zh = require('./image/material3/left_zh.png')
const material3_left_en = require('./image/material3/left_en.png')
const material3_middle_zh = require('./image/material3/middle_zh.png')
const material3_middle_en = require('./image/material3/middle_en.png')
const material3_right_zh = require('./image/material3/right_zh.png')
const material3_right_en = require('./image/material3/right_en.png')
const transition1_zh = require('./image/transition/img1_zh.png')
const transition2_zh = require('./image/transition/img2_zh.png')
const transition3_zh = require('./image/transition/img3_zh.png')
const transition4_zh = require('./image/transition/img4_zh.png')
const transition5_zh = require('./image/transition/img5_zh.png')
const transition6_zh = require('./image/transition/img6_zh.png')
const transition7_zh = require('./image/transition/img7_zh.png')
const transition8_zh = require('./image/transition/img8_zh.png')
const transition9_zh = require('./image/transition/img9_zh.png')
const transition10_zh = require('./image/transition/img10_zh.png')
const transition11_zh = require('./image/transition/img11_zh.png')
const transition12_zh = require('./image/transition/img12_zh.png')
const transition13_zh = require('./image/transition/img13_zh.png')
const transition14_zh = require('./image/transition/img14_zh.png')
const transition15_zh = require('./image/transition/img15_zh.png')
const transition16_zh = require('./image/transition/img16_zh.png')
const fullpageVideo = require('./image/other/video1.png')
const material4_zh = require('./image/material4/main_zh.png')
const material4_show1 = require('./image/material4/img1.jpg')
const material4_show2 = require('./image/material4/img2.jpg')
const material4_show3 = require('./image/material4/img3.jpg')
const material5_zh = require('./image/material5/main_zh.png')
const material5_show1 = require('./image/material5/img1.jpg')
const material5_show2 = require('./image/material5/img2.jpg')
const material5_show3 = require('./image/material5/img3.jpg')
const award_zh = require('./image/other/award_zh.png')
const material6_zh = require('./image/material6/main_zh.png')
const material6_show1 = require('./image/material6/img1.jpg')
const material6_show2 = require('./image/material6/img2.jpg')
const material7_zh = require('./image/material7/main_zh.png')
const material7_show1 = require('./image/material7/img1.jpg')
const material7_show2 = require('./image/material7/img2.jpg')
const material7_show3 = require('./image/material7/img3.jpg')
const material7_show4 = require('./image/material7/img4.jpg')
const material8_zh = require('./image/material8/main_zh.png')
const material8_show1 = require('./image/material8/img1.jpg')
const material8_show2 = require('./image/material8/img2.jpg')
const fog = require('./image/other/fog.png')
const brain1_zh = require('./image/other/brain1_zh.png')
const brain2_zh = require('./image/other/brain2_zh.png')
const brain3_zh = require('./image/other/brain3_zh.png')
const brain4_zh = require('./image/other/brain4_zh.png')
const land1 = require('./image/other/land1.png')
const land2 = require('./image/other/land2.png')
const material9_zh = require('./image/material9/main_zh.png')
const material9_en = require('./image/material9/main_en.png')
const material9_show1 = require('./image/material9/img1.png')
const space1_zh = require('./image/other/space1_zh.png')
const space2_zh = require('./image/other/space2_zh.png')
const material10_zh = require('./image/material10/main_zh.png')
const material10_show1 = require('./image/material10/img1.png')
const material11_zh = require('./image/material11/main_zh.png')
const material11_en = require('./image/material11/main_en.png')
const material11_show1 = require('./image/material11/img1.jpg')
const material11_show2 = require('./image/material11/img2.jpg')
const material11_show3 = require('./image/material11/img3.jpg')
const space3_zh = require('./image/other/space3_zh.png')
const video_left_zh = require('./image/other/video_left_zh.png')
const video_right_zh = require('./image/other/video_right_zh.png')
const people = require('./image/other/people.png')
const sand = require('./image/other/sand.png')
import bottom_left_video from './video/bottom_left.mp4'
import bottom_right_video from './video/bottom_right.mp4'
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoVisible: false,
      videoSrc: ''
    }
  }

  render () {
    const { homepage, history } = this.props
    const { language, showProjectMenu } = homepage
    console.log('qwqw', showProjectMenu)
    return <div style={{
      width: '68.25%',
      margin: '0 auto',
      padding: '0 1.25%',
      background: '#fff',
      boxSizing: 'border-box'
    }}>
      <div>
        <div style={{ display: 'flex' }}>
          <HomepageImage src={material1} percent='50%' />
          <HomepageImage src={language === 'zh' ? material2_zh : material2_en} percent='50%' />
        </div>
        <div style={{ display: 'flex' }}>
          <HomepageImage src={language === 'zh' ? material3_left_zh : material3_left_en} percent='33.3333%' />
          <HomepageImage src={language === 'zh' ? material3_middle_zh : material3_middle_en} percent='33.3333%' />
          <HomepageImage src={language === 'zh' ? material3_right_zh : material3_right_en} percent='33.3333%' />
        </div>
        <HomepageImage src={language === 'zh' ? transition1_zh : transition1_en} percent='100%' />
        <div onClick={() => {
          this.setState({
            fullVideoVisible: true
          })
        }}><HomepageImage src={fullpageVideo} percent='100%' /></div>
        <HomepageImage src={language === 'zh' ? transition2_zh : transition2_en} percent='100%' />
        <div style={{ display: 'flex' }}>
          <HomepageImage src={language === 'zh' ? material4_zh : material4_en} percent='50%' />
          <HomepageImage src={language === 'zh' ? material5_zh : material5_en} percent='50%' />
        </div>
        <HomepageImage src={language === 'zh' ? transition3_zh : transition3_en} percent='100%' />
      </div>
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? award_zh : award_en} percent='50%' />
        <HomepageImage src={material6_zh} percent='50%' />
      </div>
      <div style={{ display: 'flex' }}>
        <HomepageImage src={material7_zh} percent='50%' />
        <HomepageImage src={material8_zh} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition4_zh : transition4_en} percent='100%' />
      <HomepageImage src={fog} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition5_zh : transition5_en} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition6_zh : transition6_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={brain1_zh} percent='50%' />
        <HomepageImage src={brain2_zh} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition7_zh : transition7_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={brain3_zh} percent='50%' />
        <HomepageImage src={brain4_zh} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition8_zh : transition8_en} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition9_zh : transition9_en} percent='100%' />
      <HomepageImage src={land1} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition10_zh : transition10_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? material9_zh : material9_en} percent='50%' />
        <HomepageImage src={language === 'zh' ? space1_zh : space1_en} percent='50%' />
      </div>
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? space2_zh : space2_en} percent='50%' />
        <HomepageImage src={language === 'zh' ? material10_zh : material10_en} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition11_zh : transition11_en} percent='100%' />
      <div style={{ display: 'flex' }}>
        <HomepageImage src={language === 'zh' ? material11_zh : material11_en} percent='50%' />
        <HomepageImage src={language === 'zh' ? space3_zh : space3_en} percent='50%' />
      </div>
      <HomepageImage src={language === 'zh' ? transition12_zh : transition12_en} percent='100%' />
      <HomepageImage src={land2} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition13_zh : transition13_en} percent='100%' />
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
      <HomepageImage src={language === 'zh' ? transition14_zh : transition14_en} percent='100%' />
      <HomepageImage src={people} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition15_zh : transition15_en} percent='100%' />
      <HomepageImage src={sand} percent='100%' />
      <HomepageImage src={language === 'zh' ? transition16_zh : transition16_en} percent='100%' />
      <Modal
        className={styles.modal}
        title={null}
        visible={this.state.videoVisible}
        footer={null}
        closable={false}
        destroyOnClose
        maskClosable
        width={800}
        onCancel={() => {
          this.setState({
            videoVisible: false
          })
        }}
      >
        <Player>
          <source src={this.state.videoSrc} type='audio/mpeg' />
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
