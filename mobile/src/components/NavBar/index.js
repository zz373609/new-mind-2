import React, { Component } from 'react'
import { ProjectMenu, IconCustom } from '../../components'
import styles from './index.scss'
import propTypes from 'prop-types'
import { Input, Icon } from 'antd'
import { Menu, NavBar as NavMo, DatePicker, Button } from 'antd-mobile';
import './index.css'
import AnimateHeight from 'react-animate-height';
const Search = Input.Search;
import { CSSTransition } from 'react-transition-group';

const data = [
  {
    value: '1',
    label: {
      zh: '主页',
      en: 'HOME'
    }
  },
  {
    value: '2',
    label: {
      zh: '项目',
      en: 'PROJECT'
    },
    children: [
      {
        value: '',
        label: 'MEDITATION SEAT'
      },
      {
        value: '',
        label: 'U-SHAPE TABLE'
      }
    ]
  },
  {
    value: '3',
    label: {
      zh: '关于',
      en: 'ABOUT'
    }
  },
  {
    value: '4',
    label: {
      zh: '联系我们',
      en: 'CONTACT'
    }
  }
]

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
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
        leftContent={<Logo logo={'http://images.shinemeditation.cn/new.png'} />}
      />
      <MenuCustom height={this.state.height} language={language} />
    </div>
  }
}

const MenuCustom = ({ height, language }) => {
  return <AnimateHeight
    duration={500}
    height={height}>
    <div className={styles.menu}>
      {
        data.map((item, index) => {
          return <MenuItem
            text={item.label[language]}
            key={index}
            children={item.children ? item.children : null} />
        })
      }
    </div>
  </AnimateHeight>
}

const MenuItem = ({ text, style, children }) => {
  return <div>
    <div className={styles.item} style={style}>
      {text}
      <IconCustom content='&#xe6f5;' style={{ fontSize: '20px', color: '#108ee9' }} />
    </div>
    {
      children ? children.map((item, index) => {
        return <div className={styles.citem} key={index} style={style}>
          {item.label}
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
