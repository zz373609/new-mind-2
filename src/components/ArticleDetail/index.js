import React, { Component } from 'react'
import styles from './index.scss'
const QRcode = require('./image/QRcode.png')
const qq = require('./image/qq.png')
const qq_black = require('./image/qq_black.png')
const wechat = require('./image/wechat.png')
const wechat_black = require('./image/wechat_black.png')
const friend = require('./image/friend.png')
const friend_black = require('./image/friend_black.png')
const weibo = require('./image/weibo.png')
const weibo_black = require('./image/weibo_black.png')
const link = require('./image/link.png')
const link_black = require('./image/link_black.png')
class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inIcon: null
    }
  }
  render () {
    const { articles, homepage } = this.props
    console.log(qq_black)
    const reArticle = /\/column\/articles\/(\d+)/
    const articleId = reArticle.exec(window.location.pathname)[1]
    const article = articles.find(i => i.id === Number(articleId))
    return <div>
      <h2 style={{ fontWeight: 400, textAlign: 'center', borderBottom: '1px solid #ddd', paddingBottom: 20 }}>{article.title}</h2>
      <div className={styles.en} style={{ marginBottom: 56, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12 }}>{article.time}</span>
        <div style={{ width: 170, display: 'flex', justifyContent: 'space-between' }}>
          {[
            {
              normal: qq, hover: qq_black
            },
            {
              normal: wechat, hover: wechat_black
            },
            {
              normal: friend, hover: friend_black
            },
            {
              normal: weibo, hover: weibo_black
            },
            {
              normal: link, hover: link_black
            }
          ].map((i, index) => (
            <img style={{ height: 22, cursor: 'pointer' }} onMouseEnter={() => {
              this.setState({
                inIcon: index
              })
            }} onMouseLeave={() => {
              this.setState({
                inIcon: null
              })
            }} src={index === this.state.inIcon ? i.hover : i.normal} />
          ))}
        </div>
      </div>
      {
        article.content.map((i, index) => {
          switch (i.type) {
            case 'paragraph':
              return <p className={styles.zh} style={{ margin: 0, lineHeight: '2em', fontSize: '14px', color: '#616263' }}>{i.value}</p>
            case 'img':
              return <div style={{ margin: '60px 0' }}>
                {i.url.map((item, index) => <img style={{
                  width: '80%',
                  display: 'block',
                  margin: '0 auto'
                }} src={item} />)}
                <div className={styles.zh} style={{ width: '100%', textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>{i.value}</div>
              </div>
            case 'subTitle':
              return <h3 className={styles.zh} style={{ margin: '28px 0', fontWeight: 400 }}>{i.value}</h3>
          }
        })
      }
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px', borderTop: '1px solid #ccc' }}><img style={{ height: '84px' }} src={QRcode} /></div>
    </div>
  }
}
export default ArticleDetail
