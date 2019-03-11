import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import PropTypes from 'prop-types'
import {
  HomePage,
  EditPage
} from './routes'

function RouterConfig({ history }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/article/:id' component={EditPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  )
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

export default RouterConfig
