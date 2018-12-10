import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import PropTypes from 'prop-types'
import {
  HomePage,
  Project,
  Music,
  Column,
  About,
  Contact,
  App
} from './routes'
function RouterConfig ({ history }) {
  return (
    <div>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/music/:id' component={Music} />
            <Route exact path='/project/:id' component={Project} />
            <Route exact path='/column' component={Column} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </App>
      </Router>
    </div>
  )
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

export default RouterConfig
