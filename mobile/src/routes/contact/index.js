import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { SubTitle } from '../../components'
import styles from './style/index.scss'
import { Input, Form, Button, Select } from 'antd'
import './style/index.css'

const FormItem = Form.Item
const TextArea = Input.TextArea
const Option = Select.Option
const OptionsData = [
  {
    key: 'after_sell',
    value: {
      zh: "售后",
      en: 'After Sell'
    }
  },
  {
    key: 'coope',
    value: {
      zh: "合作",
      en: 'Cooperation'
    }
  },
  {
    key: 'recruitment',
    value: {
      zh: "招聘",
      en: 'Recruitment'
    }
  },
  {
    key: 'other',
    value: {
      zh: "其他",
      en: 'Other'
    }
  }
]

class QAForm extends Component {
  handleSubmit = (e) => {
    console.log(e)
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { language } = this.props.homepage
    return (
      <Form onSubmit={(e) => {
        e.preventDefault()
        this.props.form.validateFields((err, value) => {
          if (err) {
            console.log(err)
          }
          console.log(value)
        })
      }}>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>问题类别</span> : <span className={styles.en}>Type of Request</span>}>
          {getFieldDecorator('questionType', {
            rules: [{ required: true, message: language === 'zh' ? '请选择问题类别' : 'Please choose type of request.' }]
          })(<Select>
            {OptionsData.map((i, index) => (
              <Option key={i.key} value={i.key}>{i.value[language]}</Option>
            ))}
          </Select>)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>感兴趣的产品</span> : <span className={styles.en}>Products of Interest</span>}>
          {getFieldDecorator('interestProduct', {
            rules: [{ required: true, message: language === 'zh' ? '请告诉我们您感兴趣的产品' : ' Please tell us in which products you are interested.' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>姓</span> : <span className={styles.en}>First Name</span>}>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的姓' : 'Please enter your first name' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>名</span> : <span className={styles.en}>Last Name</span>}>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的名' : 'Please enter your last name' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>您的邮箱</span> : <span className={styles.en}>Your Email</span>}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的邮箱' : 'Please enter your email address' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>您的电话</span> : <span className={styles.en}>Phone</span>}>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的电话' : 'Please enter your phone number' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>国家</span> : <span className={styles.en}>Country</span>}>
          {getFieldDecorator('country', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的国家' : 'Please enter your country' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>公司</span> : <span className={styles.en}>Company</span>}>
          {getFieldDecorator('company', {
            rules: [{ required: true, message: language === 'zh' ? '请输入您的公司' : 'Please enter your company name' }]
          })(<Input />)}
        </FormItem>
        <FormItem label={language === 'zh' ? <span className={styles.zh}>您需要什么帮助</span> : <span className={styles.en}>How can we help?</span>}>
          {getFieldDecorator('helpInfo', {
            rules: [{ required: true, message: language === 'zh' ? '请告诉我们您需要什么帮助' : 'Please tell us how can we help' }]
          })(<TextArea rows={4} />)}
        </FormItem>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FormItem >
            {getFieldDecorator('submit')(<Button
              htmlType='submit'
              className={styles[language]}
              style={{ marginRight: 40, width: 80, background: '#aaa', boxShadow: 'inset 0 0 40px #666', color: 'white' }}>{language === 'zh' ? '提交' : 'submit'}
            </Button>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('reset')(<Button style={{ marginRight: 40, width: 80, background: '#ddd', boxShadow: 'inset 0 0 40px #aaa', color: 'white' }}
              className={styles[language]}
              onClick={() => {
                this.props.form.resetFields()
              }}
            >{language === 'zh' ? '重置' : 'reset'}
            </Button>)}
          </FormItem>
        </div>
      </Form >
    )
  }
}
const QAFormWrap = Form.create()(QAForm)
@connect(state => state)
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    function isAmap(Amap) {
      (function (Amap) {
        try {
          return Amap, true
        } catch (e) {
          return false
        }
      }())()
    }
    if (isAmap) {
      var map = new AMap.Map('mapcontainer', {
        resizeEnable: true,
        center: [120.07027, 30.13964],
        zoom: 14
      })
      var marker = new AMap.Marker({
        position: new AMap.LngLat(120.07027, 30.13964),
        title: '凤凰创意大厦'
      })
      marker.on('click', () => {
        window.open('https://www.amap.com/place/B0FFFWSOF4', '_blank')
      })
      map.add(marker)
      var map = new AMap.Map('mapcontainer', {
        resizeEnable: true,
        center: [120.07027, 30.13964],
        zoom: 14
      })
      var marker = new AMap.Marker({
        position: new AMap.LngLat(120.07027, 30.13964),
        title: '凤凰创意大厦'
      })
      marker.on('click', () => {
        window.open('https://www.amap.com/place/B0FFFWSOF4', '_blank')
      })
      map.add(marker)
    }
  }
  render() {
    const { homepage } = this.props
    const { language } = homepage
    return <div style={{
      margin: '0 auto',
      background: '#fff',
      padding: '32px 7.45%'
    }}>
      <div style={{ width: '100%' }}>
        <SubTitle title={language === 'zh' ? '联系我们' : 'CONTACT US'} />
        <div style={{
          width: '80%',
          margin: '0 auto',
          marginTop: 80
        }}>
          <QAFormWrap {...this.props} />
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: 28, marginTop: 100 }}>
        <SubTitle title={language === 'zh' ? '联系信息' : 'CONTACT INFORMATION'} />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '81%',
          margin: '0 auto',
          marginTop: 76
        }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <div>{language === 'zh' ? <span className={styles.zh}>官方电话</span> : <span
                className={styles.en}>China Tel</span>}</div>
              <div style={{ marginTop: 14 }}><span className={styles.en}>0571-87097983</span></div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <div>{language === 'zh' ? <span className={styles.zh}>邮箱</span> : <span className={styles.en}>Email</span>}</div>
              <div style={{ marginTop: 14 }}><span className={styles.en}>nanoin@163.com</span></div>
            </div>
          </div>
          <div style={{ width: '100%', marginTop: 40, marginBottom: 68 }}>
            <div>{language === 'zh' ? <span className={styles.zh}>地址</span> : <span className={styles.en}>Address</span>}</div>
            <div style={{ marginTop: 14 }}>{language === 'zh' ? <span className={styles.zh}>中国浙江省杭州市西湖区转塘街道创意路2号凤凰创意大厦3A-211 邮编：310024</span> : <span className={styles.en}>3A-211, Phoenix Creative Building, Chuangyi Rd 2, Zhuantang, Xihu, Hangzhou, Zhejiang, 310024</span>}</div>
          </div>
          <div id='mapcontainer'
            style={{
              width: '100%',
              height: '20vw',
              minHeight: '208px'
            }} />
        </div>
      </div>
    </div>
  }
}

Contact.propTypes = {
  history: PropTypes.object
}
export default Contact
