import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Tick from './Tick.js';

class Home extends Component{
    render(){
        return (
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
        );
    }
}

export default Home;