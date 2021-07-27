import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import Game from './game'
import LoginPage from './login-page'

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/game" component={() => <Game />} />
      <Route exact path="/login" component={() => <LoginPage />} />
      {/* <Route exact path="/about" component={() => <About />} /> */}
    </Switch>
  );
}

export default Root
