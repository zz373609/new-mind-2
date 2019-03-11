import React, { Component } from 'react'
import styles from './index.scss'
import { Divider } from 'antd'
import MenuItem from './MenuItem'

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
  zh: '主页',
  en: 'HOME',
  links: [
    {
      hash: 'award',
      zh: '奖项与展览',
      en: 'Awards And Exhibitions'
    }, {
      hash: 'scientific',
      zh: '科学依据',
      en: 'Scientific Evidence'
    }, {
      hash: 'space',
      zh: '冥想空间',
      en: 'Meditation Space'
    }, {
      hash: 'overseas',
      zh: '海外活动',
      en: 'Overseas Activities'
    }
  ]
},
{
  key: 'projects',
  zh: '项目',
  en: 'PROJECTS',
  links: [
    {
      pathname: '/project/seat',
      zh: '冥想座具',
      en: 'Meditation Seat'
    }, {
      pathname: '/project/desk',
      zh: '冥想桌',
      en: 'U-shape Table'
    }
  ]
}, {
  key: 'column',
  zh: '专栏',
  en: 'COLUMN',
  links: [{
    pathname: '/column/articles',
    zh: '文章',
    en: 'Articles'
  }, {
    pathname: '/column/music',
    zh: '音乐',
    en: 'Music'
  }, {
    pathname: '/column/news',
    zh: '新闻',
    en: 'News'
  }]
}, {
  key: 'about',
  zh: '关于',
  en: 'ABOUT US',
  links: [{
    pathname: '/about',
    zh: '所属公司',
    en: 'Shine Meditation'
  }, {
    pathname: '/contact',
    zh: '联系我们',
    en: 'Contact us'
  }]
}
]
const address = {
  'copy': {
    zh: 'Copyright ©2009-2016 杭州微客工业产品设计有限公司 浙IPC备18057104号-1',
    en: 'Copyright ©2009-2016 HANGZHOU NANOIN INDUSTRIAL DESIGN CO., LTD 浙IPC备18057104号-1'
  },
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
  }
}
class BottomNav extends Component {
  render() {
    const { homepage, history } = this.props
    const { language } = homepage
    return (<div style={{}} className={styles.contain}>
      <div style={{ paddingTop: '50px' }}>
        {
          navItems.map((item, index) => {
            return <MenuItem key={index} item={item} language={language} history={history} />
          })
        }
      </div>
      <p style={{ marginLeft: '16px', color: 'white', marginTop: '16px' }}>Click to Visit<span style={{ background: 'white', color: 'black', marginLeft: '8px' }}>NANOIN</span></p>
      <div style={{ marginLeft: '16px', width: '20px' }} className={styles.shares}>
        {
          imagelist.map((item, index) => {
            return <img src={item} style={{ width: '100%', marginRight: '16px' }} />
          })
        }
      </div>
      <div style={{ color: 'white', marginTop: '16px', paddingBottom: '16px' }}>
        {
          Object.keys(address).map((item, index) => {
            return <p style={{ margin: '0px', marginLeft: '16px', fontSize: '10px' }}>{address[item][language]}</p>
          })
        }
      </div>
    </div >)
  }
}
export default BottomNav
