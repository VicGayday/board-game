import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from '../redux'

import App from './app'
import './main.scss'

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
