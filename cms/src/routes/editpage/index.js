import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { Editor, QiuUpload } from '../../components'
import { fetchArticle } from '../../services/server'
import pathToRegexp from 'path-to-regexp'
import { Input, Button } from 'antd'

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      article: {
        content: '',
        title: '',
        cover: ''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.save = this.save.bind(this)
    this.getUrl = this.getUrl.bind(this)
  }

  getUrl(url) {
    let article = JSON.parse(JSON.stringify(this.state.article))
    article.cover = url
    this.setState({
      article: article
    })
  }

  onChange(data) {
    let article = JSON.parse(JSON.stringify(this.state.article))
    article.content = data
    this.setState({
      article: article
    }, () => {
      console.log(this.state.article)
    })
  }

  save() {
    this.props.dispatch({
      type: 'homepage/putArticle',
      payload: {
        id: this.state.id,
        data: this.state.article
      }
    })
  }

  componentDidMount() {
    const regexp = pathToRegexp('/article/:id')
    let match = regexp.exec(window.location.pathname)
    if (match[1]) {
      this.setState({
        id: match[1]
      })
      fetchArticle(match[1]).then(res => {
        let article = JSON.parse(JSON.stringify(this.state.article))
        article.content = res.data.article.content
        article.title = res.data.article.title
        article.cover = res.data.article.cover
        this.setState({
          article: article
        })
      })
    }
  }

  render() {
    const { homepage, loading, history } = this.props
    return <div >
      <div className={styles.nav}>
        <Button style={{ marginRight: '16px' }} type='primary' onClick={this.save}>保存</Button>
      </div>
      <div className={styles.editPage}>
        <Input placeholder={'请输入标题'}
          style={{ marginBottom: '16px' }}
          value={this.state.article.title}
          onChange={(e) => {
            let article = JSON.parse(JSON.stringify(this.state.article))
            article.title = e.target.value
            this.setState({
              article: article
            })
          }} />
        <Editor
          data={this.state.article.content}
          onChange={this.onChange}
        />
        <div>
          <div className={styles.final}>
            {
              this.state.article.cover ? <div className={styles.imagebox} style={{ backgroundImage: `url(${this.state.article.cover})` }} /> : ''
            }
            <QiuUpload
              getUrl={this.getUrl}
            />
          </div>
        </div>
      </div>
    </div>
  }
}

EditPage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default EditPage
