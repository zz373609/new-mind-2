import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import styles from './style/index.scss'
import classNames from 'classnames'
import { Music, Articles, News, ArticleDetail } from '../../components'
import { Route } from 'dva/router'
import { mockArticles } from '../../components/Articles/mockdata/mock.js'

const type = [
  {
    zh: '文章',
    en: 'ARTICLES',
    link: '/column/articles'
  },
  {
    zh: '音乐',
    en: 'MUSIC',
    link: '/column/music'
  },
  {
    zh: '新闻',
    en: 'NEWS',
    link: '/column/news'
  }
]
@connect(state => state)
class Column extends Component {
  render() {
    const { history, homepage, match, dispatch } = this.props
    const { language, columnKey, articleId } = homepage
    return (<div style={{
      margin: '0 auto',
      background: '#fff',
      padding: '86px 7.45%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', marginBottom: 68, paddingBottom: 10 }}>
        <Breadcrumb separator={<span style={{ fontSize: 10, fontWeight: 600 }}>&gt;</span>}>
          <Breadcrumb.Item>{<span style={{ fontSize: 10 }} className={styles[language]}>{language === 'zh' ? '专栏' : 'COLUMN'}</span>}</Breadcrumb.Item>
          <Breadcrumb.Item>{<span style={{ fontSize: 10 }} className={styles[language]}>{type[columnKey][language]}</span>}</Breadcrumb.Item>
        </Breadcrumb>
        <ul style={{ display: 'flex' }}>
          {type.map((i, index) => (
            <li key={index}
              style={{ marginRight: index !== 2 ? 30 : 0, cursor: 'pointer' }}
              onClick={() => {
                history.push({
                  pathname: i.link
                })
                dispatch({
                  type: 'homepage/updateState',
                  payload: {
                    key: 'columnKey',
                    value: index
                  }
                })
              }}
            ><span className={classNames(styles[language], { [styles['active']]: index === columnKey })} style={{ fontSize: '10px' }}>{i[language]}</span></li>))}
        </ul>
      </div>
      <Route path='/column/articles' exact render={(props) => <Articles {...props} dispatch={dispatch} homepage={homepage} />} />
      <Route path='/column/articles/:id' exact render={(props) => <ArticleDetail {...props} article={homepage.article} homepage={homepage} />} />
      <Route path='/column/music' exact render={() => {
        return <Music musics={homepage.musics} />
      }} />
      <Route path='/column/news' exact component={News} />
    </div>
    )
  }
}

Column.propTypes = {
  history: PropTypes.object
}
export default Column
