import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
      BrowserRouter as Router,
      Route,
      Link
    } from 'react-router-dom';

import NavbarPage from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarPage />
          <Route exact path="/" component={Home} />
        </div>
      </Router>     
    );
  }
}

export default App;
