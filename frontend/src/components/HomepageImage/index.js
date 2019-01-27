import React, { Component } from 'react'
import propTypes from 'prop-types'
import styles from './index.scss'
const buy_zh_not = 'http://pkndszzxq.bkt.clouddn.com/buy_zh_not.png'
const buy_en_not = 'http://pkndszzxq.bkt.clouddn.com//image/buy/buy_en_not.png'

class HomepageImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { src, percent, onClick, id, language, buy_go, buy_link, postion, history } = this.props
    return <div id={id} onClick={onClick} style={{ width: percent, verticalAlign: 'middle' }} className={styles.homeimage}>
      {onClick ? <div className={styles.cover} /> : ''}
      {
        buy_link ? <Buy postion={postion} src={language == 'zh' ? buy_zh_not : buy_en_not} onClick={(e) => {
          history.push(buy_go)
        }} /> : ''
      }
      <img style={{ width: '100%', display: 'block' }} src={src} />
    </div>
  }
}

const Buy = ({ src, postion, onClick }) => {
  return <div className={styles.buy}
    onClick={onClick}
    style={postion == 'left' ? { bottom: '3px', left: '5px' } : {}}
  >
    <img src={src} style={{ width: '100%' }} />
  </div >
}

HomepageImage.propTypes = {
  src: propTypes.string,
  percent: propTypes.string,
  onClick: propTypes.func,
  id: propTypes.string
}

export default HomepageImage
