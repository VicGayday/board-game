import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Root from './root'

const App = () => {
  return (
    <div>
      <Router>
        <Root />
      </Router>
    </div>
  );
}
export default App
