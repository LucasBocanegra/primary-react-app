import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

import 'react-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavbarPage extends Component{
    render(){
        return (
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> 
                            <img src={logo} className="App-logo" alt="logo"/>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>                   
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;