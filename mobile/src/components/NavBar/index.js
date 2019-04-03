import React, { Component } from 'react'
import { ProjectMenu, IconCustom } from '../../components'
import styles from './index.scss'
import propTypes from 'prop-types'
import { Input, Icon } from 'antd'
import { NavBar as NavMo } from 'antd-mobile'
import './index.css'
import AnimateHeight from 'react-animate-height'

const data = [
  {
    value: '1',
    label: {
      zh: '主页',
      en: 'HOME'
    },
    link: '/'
  },
  {
    value: '2',
    label: {
      zh: '项目',
      en: 'PROJECT'
    },
    link: '/project/seat',
    children: [
      {
        value: '',
        label: {
          zh: '冥想坐具',
          en: 'MEDITATION SEAT'
        },
        link: '/project/seat'
      },
      {
        value: '',
        label: {
          zh: '冥想桌',
          en: 'U-SHAPE TABLE'
        },
        link: '/project/desk'
      }
    ]
  },
  {
    value: '3',
    label: {
      zh: '专栏',
      en: 'COLUMN'
    },
    link: '/column/articles',
    children: [
      {
        value: '0',
        label: {
          zh: '文章',
          en: 'ARTICLE'
        },
        link: '/column/articles'
      },
      {
        value: '1',
        label: {
          zh: '音乐',
          en: 'MUSIC'
        },
        link: '/column/music'
      },
      {
        value: '2',
        label: {
          zh: '新闻',
          en: 'NEWS'
        },
        link: '/column/news'
      }
    ]
  },
  {
    value: '4',
    label: {
      zh: '关于',
      en: 'ABOUT'
    },
    link: '/about'
  },
  {
    value: '5',
    label: {
      zh: '联系我们',
      en: 'CONTACT'
    },
    link: '/contact'
  },
  {
    value: '6',
    label: {
      zh: 'English',
      en: '中文'
    },
    link: '/language'
  }
]

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
    this.nav = this.nav.bind(this)
  }

  nav(link) {
    this.setState({
      height: 0
    }, () => {
      if (link == '/language') {
        this.props.dispatch({
          type: 'homepage/updateState',
          payload: {
            key: 'language',
            value: this.props.homepage.language == 'en' ? 'zh' : 'en'
          }
        })
      } else {
        this.props.history.push(link)
      }
    })
  }

  render() {
    const { history, dispatch, homepage, diff, product } = this.props
    const { language, navIndex } = homepage
    const links = [
      { link: '/', value_zh: '主页', value_en: 'HOME' },
      { link: window.location.pathname, value_zh: '项目', value_en: 'PROJECT' },
      { link: '/column/articles', value_zh: '专栏', value_en: 'COLUMN' },
      { link: '/about', value_zh: '关于', value_en: 'ABOUT' },
      { link: '/contact', value_zh: '联系我们', value_en: 'CONTACT' }
    ]
    return <div className={styles.nav}>
      <NavMo
        mode={'light'}
        rightContent={<IconCustom content='&#xe61f;' style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => {
            this.setState({
              height: this.state.height === 0 ? 'auto' : 0
            })
          }}
        />}
        leftContent={<Logo logo={'http://images.shinemeditation.cn/mobile_logo.png'} />}
      />
      <MenuCustom height={this.state.height} language={language} onClick={this.nav} />
    </div>
  }
}

const MenuCustom = ({ height, language, onClick }) => {
  return <AnimateHeight
    duration={500}
    height={height}>
    <div className={styles.menu}>
      {
        data.map((item, index) => {
          return <MenuItem
            text={item.label[language]}
            link={item.link}
            key={index}
            children={item.children ? item.children : null}
            language={language}
            onClick={onClick}
          />
        })
      }
    </div>
  </AnimateHeight>
}

const MenuItem = ({ text, style, children, language, onClick, link }) => {
  return <div onClick={() => {
    link ? onClick(link) : console.log('no link')
  }}>
    <div className={styles.item} style={style}>
      {text}
      <IconCustom content='&#xe6f5;' style={{ fontSize: '20px', color: '#108ee9' }} />
    </div>
    {
      children ? children.map((item, index) => {
        return <div className={styles.citem} key={index} style={style} onClick={() => {
          onClick(item.link)
        }}>
          {item.label[language]}
        </div>
      }) : ''
    }
  </div>
}

const Logo = ({ logo }) => {
  return <div style={{ width: '100px' }}>
    <img src={logo} style={{ width: '100%' }} />
  </div>
}

NavBar.propTypes = {
  history: propTypes.object,
  dispatch: propTypes.func,
  homepage: propTypes.object
}
export default NavBar
