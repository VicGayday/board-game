import React from 'react';
import ReactDOM from 'react-dom'
import Game from './game'
import Header from './header'
import './main.scss'

const Main = () => {
  return (
    <div>
      <Header />
      <Game />
    </div>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
