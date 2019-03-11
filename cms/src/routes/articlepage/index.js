import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable } from '../../components'
import { Modal } from 'antd'

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false,
      article: null
    }
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title'
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
      }
    ]
  }

  preview (item) {
    this.setState({
      article: item
    })
  }

  edit (item) {
    window.open('/article/' + item._id, '_blank')
  }

  render () {
    const { homepage, loading } = this.props
    const { articles } = homepage
    return <div>
      <Modal
        visiable={this.state.visiable}
      >
        <div />
      </Modal>
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
