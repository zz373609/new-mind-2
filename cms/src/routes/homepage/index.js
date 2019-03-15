import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { NavBar } from '../../components'
import { Menu } from 'antd'
import { Route, Switch } from 'dva/router'
import {
  ProjectPage,
  MusicPage,
  ArticlePage,
  NewsPage
} from '../index'

const MenuItem = Menu.Item

const Menus = [
  {
    value: '/',
    lable: '项目'
  },
  {
    value: '/article',
    lable: '文章'
  },
  {
    value: '/music',
    lable: '音乐'
  },
  {
    value: '/news',
    lable: '新闻'
  }
]

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { history } = this.props
    return <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu
            mode='inline'
            style={{ border: 'none' }}
            selectedKeys={[window.location.pathname]}
            onClick={(e) => {
              history.push(e.key)
            }}
          >
            {
              Menus.map((item, index) => {
                return <MenuItem key={item.value}>{item.lable}</MenuItem>
              })
            }
          </Menu>
        </div>
        <div className={styles.right}>
          <Switch>
            <Route path='/' exact component={ProjectPage} />
            <Route path='/article' exact component={ArticlePage} />
            <Route path='/music' exact component={MusicPage} />
            <Route path='/news' exact component={NewsPage} />
          </Switch>
        </div>
      </div>
    </div>
  }
}

HomePage.propTypes = {
  history: PropTypes.object
}

export default HomePage
