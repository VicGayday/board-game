import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { history } from './history'

import Home from './home'
import Game from './game'

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/game" component={() => <Game />} />
      </Switch>
    </Router>
  );
}

export default Root
