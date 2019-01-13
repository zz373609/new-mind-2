import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavBar, TopBanner, BottomNav } from '../../components'
import { withRouter } from 'react-router'
import { connect } from 'dva'
import styles from './style/index.scss'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTopNav: true
    }
  }
  render() {
    const { history, homepage, dispatch } = this.props
    return <div className={styles.container} style={{
      width: '100vw',
      margin: '0 auto',
      background: 'repeating-linear-gradient( -45deg, #f2f2f2, #f2f2f2 1px, #d9d9d9 1px, #fff 5px)',
      position: 'relative'
    }}>
      {this.state.showTopNav && <NavBar history={history} dispatch={dispatch} homepage={homepage} />}
      <TopBanner src={homepage.topSrc} />
      <div style={{
        maxWidth: '1920px',
        margin: '0 auto'
      }}>
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
