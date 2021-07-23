import React from 'react';
import ReactDOM from 'react-dom'
import App from './app'
import './main.scss'

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
