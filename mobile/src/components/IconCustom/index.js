import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './index.scss'

class IconCustom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { className, content, style, onClick, ...rest } = this.props
    return <i className={classNames(styles.iconfont, { [className]: !!className })} style={style} onClick={onClick}>{content}</i>
  }
}

export default IconCustom
