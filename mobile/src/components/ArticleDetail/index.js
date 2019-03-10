import React, { Component } from 'react'
import styles from './index.scss'
import { ShareIcons } from '../../components'
import propTypes from 'prop-types'
const QRcode = require('./image/QRcode.png')
class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inIcon: null
    }
  }
  render () {
    const { article } = this.props
    return <div>
      <h2 style={{ fontWeight: 400, textAlign: 'center', borderBottom: '1px solid #ddd', paddingBottom: 20 }}>{article.title}</h2>
      <div className={styles.en} style={{ marginBottom: 56, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12 }}>{article.time}</span>
        <ShareIcons />
      </div>
      {
        article && Object.keys(article).length && article.content.map((i, index) => {
          switch (i.type) {
            case 'paragraph':
              return <p key={index} className={styles.zh} style={{ margin: 0, lineHeight: '2em', fontSize: '14px', color: '#616263' }}>{i.value}</p>
            case 'img':
              return <div key={index} style={{ margin: '60px 0' }}>
                {i.url.map((item, index) => <img style={{
                  width: '80%',
                  display: 'block',
                  margin: '0 auto'
                }} src={item} />)}
                <div className={styles.zh} style={{ width: '100%', textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>{i.value}</div>
              </div>
            case 'subTitle':
              return <h3 key={index} className={styles.zh} style={{ margin: '28px 0', fontWeight: 400 }}>{i.value}</h3>
          }
        })
      }
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px', borderTop: '1px solid #ccc' }}><img style={{ height: '84px' }} src={QRcode} /></div>
    </div>
  }
}
ArticleDetail.propTypes = {
  articles: propTypes.array
}
export default ArticleDetail
