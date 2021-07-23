import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Root from './root'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Root />
      </Router>
    </div>
  )
}
export default App
