import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable } from '../../components'
import { Modal, Button, message, Divider } from 'antd'
import { insertArticle } from '../../services/server'
import moment from 'moment'

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      article: null
    }
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title'
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
            {
              this.Ops.map((item, index) => {
                return <a onClick={() => {
                  item.func(record)
                }} key={index} style={{ marginRight: '16px' }}>{item.lable}</a>
              })
            }
          </div>
        }
      }
    ]
    this.preview = this.preview.bind(this)
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.newarticle = this.newarticle.bind(this)
    this.Ops = [
      {
        value: 'preview',
        lable: '预览',
        func: this.preview
      },
      {
        value: 'edit',
        lable: '编辑',
        func: this.edit
      },
      {
        value: 'edit',
        lable: '删除',
        func: this.delete
      }
    ]
  }

  preview(item) {
    this.setState({
      article: item,
      visible: true
    })
  }

  edit(item) {
    window.open('/article/' + item._id, '_blank')
  }

  delete(item) {
    let { dispatch } = this.props
    dispatch({
      type: 'homepage/deleteArticleServer',
      payload: item._id
    })
  }

  async newarticle() {
    try {
      let res = await insertArticle('new', {})
      window.open('/article/' + res.data.id, '_blank')
    } catch (error) {
      message.error('创建文章失败')
    }
  }

  render() {
    const { homepage, loading } = this.props
    const { articles } = homepage
    return <div>
      <Modal
        visible={this.state.visible}
        onCancel={() => {
          this.setState({
            visible: false
          })
        }}
        width={800}
        footer={null}
      >
        <div className={styles.preview}>
          <h3>封面图</h3>
          <img src={this.state.article ? this.state.article.cover : ''} style={{ width: '100%' }} />
          <Divider />
          <h2>{this.state.article ? this.state.article.title : ''}</h2>
          <div dangerouslySetInnerHTML={{ __html: this.state.article ? this.state.article.content : '' }} />
        </div>
      </Modal>
      <div className={styles.addnew}>
        <Button onClick={this.newarticle} type={'primary'}>新建文章</Button>
      </div>
      <NewTable
        columns={this.columns}
        dataSource={articles}
      />
    </div>
  }
}

ArticlePage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default ArticlePage
