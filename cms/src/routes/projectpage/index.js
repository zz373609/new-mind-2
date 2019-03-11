import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NewTable } from '../../components'
import { Modal, Form, Input, Button } from 'antd'

const { TextArea } = Input;
const FormItem = Form.Item

const FormItemLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 22 },
    sm: { span: 22 }
  }
}

const Ops = [
  {
    op: '编辑'
  }
]

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class ProjectPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false,
      product: {}
    }
    this.columns = [
      {
        title: '名字',
        dataIndex: 'title',
        render: (text) => {
          return <span>{text.zh}</span>
        }
      },
      {
        title: '价格',
        dataIndex: 'price'
      },
      {
        title: '操作',
        render: (text, record) => {
          return <div>
            {
              Ops.map((item, index) => {
                return <a
                  onClick={() => {
                    this.setState({
                      visiable: true,
                      product: record
                    })
                  }}
                >{item.op}</a>
              })
            }
          </div>
        }
      }
    ]
    this.updateProduct = this.updateProduct.bind(this)
  }

  updateProduct(key, language, val) {
    let product = JSON.parse(JSON.stringify(this.state.product))
    language ? product[key][language] = val : product[key] = val
    this.setState({
      product: product
    })
  }

  render() {
    const { homepage, loading } = this.props
    const { products } = homepage
    let { product } = this.state
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
            label='标题(中)'
            {...FormItemLayout}
          >
            <Input value={product.title ? product.title.zh : ''}
              onChange={(e) => {
                this.updateProduct('title', 'zh', e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='标题(英)'
            {...FormItemLayout}
          >
            <Input value={product.title ? product.title.en : ''}
              onChange={(e) => {
                this.updateProduct('title', 'en', e.target.value)
              }} />
          </FormItem>
          <FormItem
            label='描述(中)'
            {...FormItemLayout}
          >
            <TextArea value={product.description ? product.description.zh : ''}
              onChange={(e) => {
                this.updateProduct('description', 'zh', e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='描述(英)'
            {...FormItemLayout}
          >
            <TextArea value={product.description ? product.description.en : ''}
              onChange={(e) => {
                this.updateProduct('description', 'en', e.target.value)
              }}
            />
          </FormItem>
          <FormItem
            label='价格'
            {...FormItemLayout}
          >
            <Input value={product.price ? product.price : ''}
              onChange={(e) => {
                this.updateProduct('price', null, e.target.value)
              }}
            />
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
        dataSource={products}
      />
    </div>
  }
}

ProjectPage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default ProjectPage
