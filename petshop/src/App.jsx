import React from 'react';
import './assets/css/base/base.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App;
