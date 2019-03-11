import React, { Component } from 'react'
import styles from './style/index.scss'
import { CSSTransition } from 'react-transition-group';
import './style/index.css'
import AnimateHeight from 'react-animate-height';
import { IconCustom } from '../../../components'
import { Divider } from 'antd'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  render() {
    let { item, language, history } = this.props
    return <div onClick={() => {
      this.setState({
        height: this.state.height === 0 ? 'auto' : 0
      })
    }}>
      <div className={styles.contain}>
        <span style={{ color: 'white' }}
        >{item[language]}</span>
        <IconCustom content='&#xe6e9;' style={{ color: 'white' }} />
      </div >
      <AnimateHeight
        duration={500}
        height={this.state.height}>
        {
          item.links.map((subitem, index) => {
            return <div key={index} style={{ color: 'white' }} className={styles.item} onClick={() => {
              subitem.hash ?
                window.location.href = `/?language=${language}#${subitem.hash}`
                : history.push({
                  pathname: subitem.pathname,
                  search: `language=${language}`
                })
            }}>
              {subitem[language]}
            </div>
          })
        }
      </AnimateHeight>
    </div>
  }
}
export default MenuItem
