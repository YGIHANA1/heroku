import React, { Component } from "react";
import "../App.css";
import {Nav,Navbar} from "react-bootstrap"

// import Home from "./home"
class NavbarPage extends Component {


render() {
  return (
    <Nav className="justify-content-center bg-light " activeKey="/home" sticky="top" >
    <Navbar.Brand href="/home" className="Marvel">MRX</Navbar.Brand>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="comic">Comics</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/message">Message</Nav.Link>
    </Nav.Item>

  </Nav>

    );
  }
}

export default NavbarPage;