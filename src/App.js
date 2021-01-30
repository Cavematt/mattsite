import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
import AboutMe from './components/AboutMe'
import Business from './components/Business'
import Portfolio from './components/Portfolio'
import Security from './components/Security'
import Contact from './components/Contact'

function App() {
  

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route path="/AboutMe" exact>
            <AboutMe />
          </Route>
          <Route path="/Business" exact>
            <Business />
          </Route>
          <Route path="/Portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/Security" exact>
            <Security />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
