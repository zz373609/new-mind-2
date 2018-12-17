import React, { Component } from 'react'
import styles from './index.scss'
import { mockArticles } from './mockdata/mock.js'
import classNames from 'classnames'
import { Pagination } from 'antd'
const readMore = require('./image/readmore.png')
const readMore_black = require('./image/readmore_black.png')
class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inIcon: null,
      current: 1
    }
  }
  renderAbstract = (article, index) => {
    const { history } = this.props
    return <div>
      <h3 className={styles.zh} style={{ fontWeight: 400 }}>{article.title}</h3>
      <div className={styles.en} style={{ fontSize: 12, color: '#222' }}>{article.time}</div>
      <div className={styles.zh} style={{ fontSize: '12px', margin: '16px 0' }}>{article.content.filter(i => i.type === 'subTitle').map(i => i.value).join('/')}</div>
      <p className={classNames(styles.zh, { [styles['abstract-para']]: true })}>{article.content.find(i => i.type === 'paragraph').value}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img style={{ height: '46px', marginTop: 10, cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: `/column/articles/${article.id}`
            })
          }}
          onMouseEnter={() => {
            this.setState({
              inIcon: index
            })
          }}
          onMouseLeave={() => {
            this.setState({
              inIcon: null
            })
          }}
          src={this.state.inIcon === index ? readMore_black : readMore} />
      </div>
    </div >
  }
  render () {
    const { current } = this.state
    return (<div>
      {
        mockArticles.slice((current - 1) * 5, current * 5).map((i, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #ddd',
            marginBottom: 22,
            paddingBottom: 22
          }}>
            <div style={{ width: '48%' }}><img style={{ display: 'block', width: '100%' }} src={i.cover} /></div>
            <div style={{ width: '48%' }}>{
              this.renderAbstract(i, index)
            }</div>
          </div>
        ))
      }
      <Pagination size='small' pageSize={5} current={current} total={mockArticles.length} onChange={page => {
        this.setState({
          current: page
        })
      }} />
    </div>)
  }
}
export default Articles
