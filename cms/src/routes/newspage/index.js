import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable, QiuUpload } from '../../components'
import { Modal, Button, Form, Input, DatePicker } from 'antd'
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
class NewsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false,
      newses: [],
      news: {}
    }
    this.columns = [
      {
        title: '名字',
        dataIndex: 'content'
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
                news: record,
                visiable: true
              })
            }}>编辑</a>
            <a onClick={() => {
              this.deleteNews(record)
            }}>删除</a>
          </div>
        }
      }
    ]
    this.deleteNews = this.deleteNews.bind(this)
    this.makenew = this.makenew.bind(this)
    this.updateContent = this.updateContent.bind(this)
    this.updateCover = this.updateCover.bind(this)
    this.updateDate = this.updateDate.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  confirm() {
    let { dispatch } = this.props
    let news = JSON.parse(JSON.stringify(this.state.news))
    delete news._id
    dispatch({
      type: 'homepage/putNews',
      payload: {
        id: this.state.news._id,
        data: news
      }
    })
  }

  updateContent(val) {
    let news = JSON.parse(JSON.stringify(this.state.news))
    news.content = val
    this.setState({
      news
    })
  }

  updateCover(url) {
    let news = JSON.parse(JSON.stringify(this.state.news))
    news.cover = url
    this.setState({
      news
    })
  }

  updateDate(value, string) {
    let news = JSON.parse(JSON.stringify(this.state.news))
    news.date = string
    this.setState({
      news
    })
  }

  deleteNews(item) {
    let { dispatch } = this.props
    dispatch({
      type: 'homepage/deleteNews',
      payload: item._id
    })
  }

  makenew() {
    let { dispatch } = this.props
    dispatch({
      type: 'homepage/newNews'
    })
  }

  render() {
    const { homepage, loading } = this.props
    const { newses } = homepage
    let { news } = this.state
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
            label='内容'
            {...FormItemLayout}
          >
            <Input value={news.content ? news.content : ''}
              onChange={(e) => {
                this.updateContent(e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='新闻封面图'
            {...FormItemLayout}
          >
            <div className={styles.musicbox}>
              <div style={{ marginRight: '16px' }}>
                {
                  this.state.news.cover ? <div
                    className={styles.mucover}
                    style={{ backgroundImage: `url(${this.state.news.cover ? this.state.news.cover : ''})` }}
                  /> : ''
                }
              </div>
              <QiuUpload
                getUrl={this.updateCover}
              />
            </div>
          </FormItem>
          <FormItem
            label='时间'
            {...FormItemLayout}
          >
            <DatePicker onChange={this.updateDate} value={news.date ? moment(news.date) : null} />
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
        <Button type='primary' onClick={this.makenew}>新建新闻</Button>
      </div>
      <NewTable
        columns={this.columns}
        dataSource={newses}
      />
    </div>
  }
}

NewsPage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default NewsPage
