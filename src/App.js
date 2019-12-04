import React, { Component } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import AnnualRouter from './modules/panel/Router';

const routes = [
  ...AnnualRouter
]
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>
    )
  }
}

