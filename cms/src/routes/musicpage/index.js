import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable, QiuUpload } from '../../components'
import { Modal, Form, Input, Button } from 'antd'

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
        title: '操作',
        render: (text, record) => {
          return <div>
            <a onClick={() => {
              this.setState({
                music: record,
                visiable: true
              })
            }}>编辑</a>
          </div>
        }
      }
    ]
    this.updateProduct = this.updateProduct.bind(this)
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
            <QiuUpload />
          </FormItem>
          <FormItem
            label='音乐封面图'
            {...FormItemLayout}
          >
            <QiuUpload />
          </FormItem>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Button type='primary'>修改</Button>
        </div>
      </Modal>
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
