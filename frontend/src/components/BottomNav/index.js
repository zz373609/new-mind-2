import React, { Component } from 'react'
import styles from './index.scss'
import { Divider } from 'antd'
const bottom_nav_zh = 'http://pkndszzxq.bkt.clouddn.com//image/bottom/bg/WechatIMG111.png'
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
      en_value: 'Meditation Table'
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
    en_value: 'COMPENT'
  }, {
    pathname: '/contact',
    zh_value: '联系我们',
    en_value: 'CONTACT US'
  }]
}
]
const address = {
  'address': {
    en: 'Address:Zhejiang hangzhou xihu chuanyilu 3A-211',
    zh: '地址:浙江省杭州市西湖区转塘街道创意路2号凤凰创意大厦3A-211室'
  },
  'zip': {
    zh: '邮编:310024',
    cn: 'Zip:310024'
  },
  'phone': {
    zh: '电话:+86-571-87097983',
    en: 'phone:+86-571-87097983'
  }
}
class BottomNav extends Component {
  render() {
    const { homepage, history } = this.props
    const { language } = homepage
    return (<div id='bottomNav' style={{ verticalAlign: 'middle', width: '100%', position: 'relative' }}>
      <div className={styles.nav}>
        导航
      </div>
      <img style={{ width: '100%' }} src={bottom_nav_zh} />
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '68.25%',
        margin: '0 auto',
        padding: '64px 0',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50% )'
      }}>
        {
          navItems.map(item => (
            <li key={item.key}>
              <div>
                <h3 style={{
                  fontSize: 15, color: 'white', fontWeight: 300
                }}>{language === 'zh' ? item.zh_value : item.en_value}</h3>
                <ul>{
                  item.links.map((i, index) => (
                    <li key={index}>{
                      i.hash && <a style={{
                        color: '#ddd',
                        textDecoration: 'none',
                        fontSize: 10,
                        fontFamily: 'Helvertical,Microsoft Yahei'
                      }} href={`/?language=${language}#${i.hash}`}>
                        {
                          language === 'zh' ? i.zh_value : i.en_value
                        }
                      </a>
                    }{i.pathname && <span
                      onClick={() => {
                        history.push({
                          pathname: i.pathname,
                          search: `language=${language}`
                        })
                      }}
                      style={{
                        cursor: 'pointer',
                        color: '#ddd',
                        fontSize: 10,
                        fontFamily: 'Helvertical,Microsoft Yahei'
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
        <Divider style={{
          backgroundColor: '#878787'
        }} />
        <p style={{ margin: '0px', width: '180px', marginTop: '16px' }}>{address['address'][language]}</p>
        <p style={{ margin: '0px' }}>{address['zip'][language]}</p>
        <p style={{ margin: '0px' }}>{address['phone'][language]}</p>
      </div>
    </div >)
  }
}
export default BottomNav
