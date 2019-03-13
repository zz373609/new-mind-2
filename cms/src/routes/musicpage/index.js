import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable, QiuUpload } from '../../components'
import { Modal, Form, Input, Button } from 'antd'
import ReactAudioPlayer from 'react-audio-player'
import moment from 'moment'

const FormItem = Form.Item
const FormItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 20 }
  }
}

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class MusicPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: {},
      visiable: false
    }
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title'
      },
      {
        title: '名字',
        dataIndex: 'name'
      },
      {
        title: '创建时间',
        dataIndex: 'date',
        render: (text) => {
          return <div>
            {
              text ? moment(text).format('YYYY-MM-DD HH:MM:SS') : ''
            }
          </div>
        }
      },
      {
        title: '操作',
        render: (text, record) => {
          return <div>
            <a style={{ marginRight: '16px' }} onClick={() => {
              this.setState({
                music: record,
                visiable: true
              })
            }}>编辑</a>
            <a onClick={() => {
              this.deleteMusic(record)
            }}>删除</a>
          </div>
        }
      }
    ]
    this.updateProduct = this.updateProduct.bind(this)
    this.cover = this.cover.bind(this)
    this.music = this.music.bind(this)
    this.confirm = this.confirm.bind(this)
    this.makenew = this.makenew.bind(this)
    this.deleteMusic = this.deleteMusic.bind(this)
  }

  cover(url) {
    let music = JSON.parse(JSON.stringify(this.state.music))
    music.cover = url
    this.setState({
      music: music
    })
  }

  music(url) {
    let music = JSON.parse(JSON.stringify(this.state.music))
    music.linkUrl = url
    this.setState({
      music: music
    })
  }

  confirm() {
    console.log('herer?')
    let { dispatch } = this.props
    let music = JSON.parse(JSON.stringify(this.state.music))
    delete music._id
    dispatch({
      type: 'homepage/putMusic',
      payload: {
        id: this.state.music._id,
        data: music
      }
    })
  }

  makenew() {
    let { dispatch } = this.props
    dispatch({
      type: 'homepage/newMusic'
    })
  }

  deleteMusic(item) {
    let { dispatch } = this.props
    dispatch({
      type: 'homepage/deleteMusics',
      payload: item._id
    })
  }

  updateProduct(key, val) {
    let music = JSON.parse(JSON.stringify(this.state.music))
    music[key] = val
    this.setState({
      music: music
    })
  }

  render() {
    const { homepage, loading } = this.props
    const { musics } = homepage
    const { music } = this.state
    return <div>
      <Modal
        visible={this.state.visiable}
        onCancel={() => {
          this.setState({
            visiable: false
          })
        }}
        width={800}
        footer={null}
      >
        <div style={{ marginTop: '32px' }}>
          <FormItem
            label='标题'
            {...FormItemLayout}
          >
            <Input value={music.title ? music.title : ''}
              onChange={(e) => {
                this.updateProduct('title', e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='名字'
            {...FormItemLayout}
          >
            <Input value={music.name ? music.name : ''}
              onChange={(e) => {
                this.updateProduct('name', e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='音乐'
            {...FormItemLayout}
          >
            <div className={styles.musicbox}>
              <div style={{ marginRight: '16px' }}>
                {
                  this.state.music.linkUrl ? <ReactAudioPlayer
                    src={this.state.music.linkUrl ? this.state.music.linkUrl : ''}
                    controls
                  /> : ''
                }
              </div>
              <QiuUpload
                getUrl={this.music}
              />
            </div>
          </FormItem>
          <FormItem
            label='音乐封面图'
            {...FormItemLayout}
          >
            <div className={styles.musicbox}>
              <div style={{ marginRight: '16px' }}>
                {
                  this.state.music.cover ? <div
                    className={styles.mucover}
                    style={{ backgroundImage: `url(${this.state.music.cover ? this.state.music.cover : ''})` }}
                  /> : ''
                }
              </div>
              <QiuUpload
                getUrl={this.cover}
              />
            </div>
          </FormItem>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Button type='primary' onClick={this.confirm}>修改</Button>
        </div>
      </Modal>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '16px'
      }}>
        <Button type='primary' onClick={this.makenew}>新建音乐</Button>
      </div>
      <NewTable
        columns={this.columns}
        dataSource={musics}
      />
    </div>
  }
}

MusicPage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default MusicPage
