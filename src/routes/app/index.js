import React, { Component } from 'react'
import propTypes from 'prop-types'
import { NavBar, TopBanner, BottomNav, ProjectMenu } from '../../components'
import { withRouter } from 'react-router'
import { connect } from 'dva'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { history, homepage, dispatch } = this.props
    return <div style={{
      width: '100vw', margin: '0 auto', minWidth: '1024px',
      background: 'repeating-linear-gradient( -45deg, #d9d9d9, #ddd 1px, #fff 2px, #fff 7px)',
      position: 'relative'
    }}>
      <NavBar history={history} dispatch={dispatch} homepage={homepage} />
      <TopBanner src={homepage.topSrc} />
      <ProjectMenu history={history} key='projectmenu' visible={homepage.showProjectMenu} />
      {this.props.children}
      <BottomNav />
    </div>
  }
}
App.propTypes = {
  children: propTypes.node,
  history: propTypes.object,
  homepage: propTypes.object
}
export default withRouter(connect(state => state)(App))
