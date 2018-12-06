import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import PropTypes from 'prop-types'
import {
  HomePage,
  Project,
  Music,
  Column,
  About,
  Contact
} from './routes'
import {
  NavBar
} from './components'
function RouterConfig ({ history }) {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path='/' render={(props) => (
            <NavBar {...props} history={history} />
          )} />
          <div>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/project' exact component={Project} />
              <Route path='/music' exact component={Music} />
              <Route path='/column' exact component={Column} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

export default RouterConfig
