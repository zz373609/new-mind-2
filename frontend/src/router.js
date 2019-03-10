import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import PropTypes from 'prop-types'
import {
  HomePage,
  Project,
  Column,
  About,
  Contact,
  App
} from './routes'
function RouterConfig({ history, match }) {
  return (
    <div>
      <Router history={history} match={match}>
        <App>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/project/:id' component={Project} />
            <Route path='/column' component={Column} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </App>
      </Router>
    </div>
  )
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default RouterConfig
