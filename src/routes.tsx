import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Layout from './components/Layout';
import Detail from './components/Detail';

export class App extends React.Component<any, any> {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={Layout} path="/">
          <IndexRoute component={Home} />
          <Route component={Detail} path="/about" />
        </Route>
      </Router>
    );
  }
}