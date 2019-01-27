import React, { Component } from 'react'
import styles from './index.scss'
import { Divider } from 'antd'
const bottom_nav_zh = 'http://pkndszzxq.bkt.clouddn.com/image/bottom/WechatIMG124.png'

import qq from './image/qq.png'
import facebook from './image/facebook.png'
import wechat from './image/wechet.png'
import weibo from './image/weibo.png'

const imagelist = [
  qq,
  wechat,
  weibo,
  facebook
]
const navItems = [{
  key: 'home',
  zh_value: '主页',
  en_value: 'HOME',
  links: [
    {
      hash: 'award',
      zh_value: '奖项与展览',
      en_value: 'Awards And Exhibitions'
    }, {
      hash: 'scientific',
      zh_value: '科学依据',
      en_value: 'Scientific Evidence'
    }, {
      hash: 'space',
      zh_value: '冥想空间',
      en_value: 'Meditation Space'
    }, {
      hash: 'overseas',
      zh_value: '海外活动',
      en_value: 'Overseas Activities'
    }
  ]
},
{
  key: 'projects',
  zh_value: '项目',
  en_value: 'PROJECTS',
  links: [
    {
      pathname: '/project/seat',
      zh_value: '冥想座具',
      en_value: 'Meditation Seat'
    }, {
      pathname: '/project/table',
      zh_value: '冥想桌',
      en_value: 'U-shape Table'
    }
  ]
}, {
  key: 'column',
  zh_value: '专栏',
  en_value: 'COLUMN',
  links: [{
    pathname: '/column/articles',
    zh_value: '文章',
    en_value: 'Articles'
  }, {
    pathname: '/column/music',
    zh_value: '音乐',
    en_value: 'Music'
  }, {
    pathname: '/column/news',
    zh_value: '新闻',
    en_value: 'News'
  }]
}, {
  key: 'about',
  zh_value: '关于',
  en_value: 'ABOUT US',
  links: [{
    pathname: '/about',
    zh_value: '所属公司',
    en_value: 'Shine Meditation'
  }, {
    pathname: '/contact',
    zh_value: '联系我们',
    en_value: 'Contact us'
  }]
}
]
const address = {
  'company': {
    en: 'Compnay:NANOIN degsin',
    zh: '公司:杭州微客设计有限公司'
  },
  'address': {
    en: 'Add:3A-211，Phoenix Creative Building, Chuangyi Rd 2, Zhuantang, Hangzhou, Zhejiang',
    zh: '地址:浙江省杭州市西湖区转塘街道创意路2号凤凰创意大厦3A-211室'
  },
  'zip': {
    zh: '邮编: 310024',
    en: 'Zip code: 310024'
  },
  'phone': {
    zh: '电话: +86-571-87097983',
    en: 'phone: +86-571-87097983'
  },
  'copy': {
    zh: 'Copyright ©2009-2016 杭州微客工业产品设计有限公司 浙IPC备18057104号-1',
    en: 'Copyright ©2009-2016 HANGZHOU NANOIN INDUSTRIAL DESIGN CO., LTD 浙IPC备18057104号-1'
  }
}
class BottomNav extends Component {
  render() {
    const { homepage, history } = this.props
    const { language } = homepage
    return (<div id='bottomNav' style={{ verticalAlign: 'middle', width: '100%', position: 'relative' }}>
      <img style={{ width: '100%' }} src={bottom_nav_zh} />
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '65%',
        margin: '0 auto',
        padding: '40px 0',
        position: 'absolute',
        top: '13%',
        left: '50%',
        transform: 'translateX(-50% )'
      }}>
        {
          navItems.map(item => (
            <li key={item.key}>
              <div>
                <h3 style={{
                  fontSize: 18, color: 'white', fontWeight: 300
                }}>{language === 'zh' ? item.zh_value : item.en_value}</h3>
                <ul>{
                  item.links.map((i, index) => (
                    <li key={index}>{
                      i.hash && <a
                        className={styles.linktop}
                        style={{
                          color: '#ddd',
                          textDecoration: 'none',
                          fontSize: 12,
                        }} href={`/?language=${language}#${i.hash}`}>
                        {
                          language === 'zh' ? i.zh_value : i.en_value
                        }
                      </a>
                    }{i.pathname && <span
                      className={styles.linktop}
                      onClick={() => {
                        history.push({
                          pathname: i.pathname,
                          search: `language=${language}`
                        })
                      }}
                      style={{
                        cursor: 'pointer',
                        color: '#ddd',
                        fontSize: 12,
                      }}>{language === 'zh' ? i.zh_value : i.en_value
                      }</span>}</li>
                  ))
                }</ul>
              </div>
            </li>
          ))
        }
      </ul>
      <div className={styles.address}>
        <p className={styles.linkto} ><span style={{ fontSize: '11px' }} >{language == 'zh' ? '点击进入' : 'Click to visit'}</span><span className={styles.weike} onClick={() => {
          window.open('http://nanoin.cn/global_cms_home', '_blank')
        }} >{language == 'zh' ? '微客设计' : 'NANOIN'}</span></p>
        <Divider style={{
          backgroundColor: '#878787'
        }} />
        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '7%' }}>
            <img src={'http://pkndszzxq.bkt.clouddn.com/WechatIMG125.png'} style={{ width: '100%' }} />
          </div>
          <div className={styles.addressinfo}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {
                imagelist.map((item, index) => {
                  return <div style={{ width: '4%', marginRight: '16px', marginBottom: '16px' }}><img src={item} style={{ width: '100%' }} /></div>
                })
              }
            </div>
            <p style={{ margin: '0px', textAlign: 'center' }}>{address['copy'][language]}</p>
            <p style={{ margin: '0px', textAlign: 'center' }}>{address['address'][language]}</p>
            <p style={{ margin: '0px', textAlign: 'center' }}>{address['zip'][language]}</p>
            <p style={{ margin: '0px', textAlign: 'center' }}>{address['phone'][language]}</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div >)
  }
}
export default BottomNav
