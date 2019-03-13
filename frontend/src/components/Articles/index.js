import React, { Component } from 'react'
import styles from './index.scss'
import { mockArticles } from './mockdata/mock.js'
import classNames from 'classnames'
import { Pagination } from 'antd'
import propTypes from 'prop-types'
const readMore = require('./image/readmore.png')
const readMore_black = require('./image/readmore_black.png')
import moment from 'moment'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inIcon: null,
      current: 1
    }
  }
  renderAbstract = (article, index) => {
    const { history } = this.props
    return <div >
      <h3 className={styles.zh} style={{ fontWeight: 400 }}>{article.title}</h3>
      <div className={styles.en} style={{ fontSize: 12, color: '#222' }}>{article.time}</div>
    </div >
  }
  render() {
    const { current } = this.state
    const { homepage, history } = this.props
    return (<div>
      {
        homepage && homepage.articles && homepage.articles.map((i, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #ddd',
            marginBottom: 22,
            paddingBottom: 22
          }} onClick={() => {
            history.push({
              pathname: `/column/articles/${i._id}`
            })
          }}>
            <div style={{ width: '48%' }}><img style={{ display: 'block', width: '100%' }} src={i.cover} /></div>
            <div style={{ width: '48%' }}>{
              this.renderAbstract(i, index)
            } <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div>read more</div>
                <span style={{ fontSize: '12px' }}>{moment(i.date).format('YYYY-MM-DD HH:MM:SS')}</span>
              </div>
            </div>
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
Articles.propTypes = {
  history: propTypes.object
}
export default Articles
