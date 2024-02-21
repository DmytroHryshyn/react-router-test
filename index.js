import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import {App, App1} from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

import { HashRouter, Route as FutureRoute, Switch } from 'react-router-dom'

const Emtpy = () => "";

render((
  <div>
  <Router history={hashHistory}>
    <Route path="/new/*" component={Emtpy} />
    <Route path="/" component={App}>
    <Redirect path="/repos" to={'/new/repos'} customProp={1}/>
      {/* <Route path='/repos' component={Repos} /> */}
      <Route path="/about" component={About}/>
    </Route>
  </Router>
  <HashRouter>
    <FutureRoute path="/new" render={() => {

      return <App1>
        <FutureRoute path="/new/repos" component={Repos} customProp={1}/>
      </App1>
    }}>
    </FutureRoute>
  </HashRouter>
  </div>
), document.getElementById('app'))
