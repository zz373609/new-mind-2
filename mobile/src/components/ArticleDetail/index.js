import React, { Component } from 'react'
import styles from './index.scss'
import { ShareIcons } from '../../components'
import propTypes from 'prop-types'
const QRcode = require('./image/QRcode.png')
import './index.css'

class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inIcon: null
    }
  }
  render() {
    const { article } = this.props
    console.log(article)
    return <div className={styles.article}>
      <h2 style={{ fontWeight: 400, textAlign: 'center', borderBottom: '1px solid #ddd', paddingBottom: 20 }}>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article ? article.content : '' }} />
    </div>
  }
}
ArticleDetail.propTypes = {
  articles: propTypes.array
}
export default ArticleDetail
