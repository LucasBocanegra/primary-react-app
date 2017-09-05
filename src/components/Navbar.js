import logo from '../assets/img/logo.svg';

import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


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
                        <LinkContainer to="/">Home</LinkContainer>
                        <NavItem eventKey={2} href="#">Coverter</NavItem>                   
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">Sair</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>               
        );
    }
}

export default NavbarPage;