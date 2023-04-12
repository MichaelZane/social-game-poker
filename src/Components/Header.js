import React from "react";

//React Bootstrap

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import logo from '../assets/mobilesocial.png'


const Header = () => {
  return (
  
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">{<Image className="logo" src={logo} alt="social game poker logo"/>}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav fill className="mr-auto">
        <Nav.Link className="atag" href="/">Events</Nav.Link>
        <Nav.Link className="atag" href="/">Membership</Nav.Link>
        <Nav.Link className="atag" href="">House Rules</Nav.Link>
        <Nav.Link className="atag" href="/">Contact Us</Nav.Link>
        <Nav.Link className="atag" href="/">Careers</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  
  )
};

export default Header;
