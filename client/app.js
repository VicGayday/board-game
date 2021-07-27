import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Root from './root'

const App = () => {
  return (
    <Router>
      <Header />
      <Root />
    </Router>

  );
}
export default App
