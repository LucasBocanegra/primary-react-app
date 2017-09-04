import React, { Component } from 'react';
import logo from './assets/img/logo.svg';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Grid,Row,Col} from 'react-bootstrap';

import NavbarPage from './components/Navbar';
import Tick from './components/Tick.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />

        <Grid className="show-grid">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <Tick increment={2} />  
              <br />
              <Tick increment={3} />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
