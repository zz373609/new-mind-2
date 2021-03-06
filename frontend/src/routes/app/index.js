import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavBar, TopBanner, BottomNav } from '../../components'
import { withRouter } from 'react-router'
import { connect } from 'dva'
import styles from './style/index.scss'

const up = {
  logo: 'http://images.shinemeditation.cn/logo_web_new.png',
  background: 'rgba(0, 0, 0,0.1)',
  color: 'white',
  selectcolor: 'white',
  bottom: '2px solid #fff'
}

const down = {
  logo: 'http://images.shinemeditation.cn/logo_web_new.png',
  background: 'rgba(0, 0, 0,0.5)',
  color: 'white',
  selectcolor: 'white',
  bottom: '2px solid #fff'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTopNav: true,
      diff: up
    }
    this.div = null
  }

  componentWillMount() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)) {
      window.location.href = 'https://m.shinemeditation.cn:911'
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      let top = this.div.getBoundingClientRect().top
      if (top < 0) {
        this.setState({
          diff: down
        })
      } else {
        this.setState({
          diff: up
        })
      }
    }
  }

  render() {
    const { history, homepage, dispatch } = this.props
    return <div className={styles.container} style={{
      width: '100vw',
      margin: '0 auto',
      // background: 'repeating-linear-gradient( -45deg, #f2f2f2, #f2f2f2 1px, #d9d9d9 1px, #fff 5px)',
      position: 'relative'
    }}>
      {this.state.showTopNav && <NavBar history={history} dispatch={dispatch} homepage={homepage} diff={this.state.diff} product={homepage.product} />}
      <TopBanner src={homepage.topSrc} dispatch={dispatch} />
      <div style={{
        width: '67.4%',
        maxWidth: '1242px',
        margin: '0 auto'
      }} ref={div => this.div = div}>
        {this.props.children}
      </div>
      <BottomNav dispatch={dispatch} homepage={homepage} history={history} />
    </div>
  }
}
App.propTypes = {
  children: propTypes.node,
  history: propTypes.object,
  homepage: propTypes.object
}
export default withRouter(connect(state => state)(App))
