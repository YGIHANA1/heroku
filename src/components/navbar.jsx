import React, { Component } from "react";
import "../App.css";
import {Nav,Navbar} from "react-bootstrap"

// import Home from "./home"
class NavbarPage extends Component {


render() {
  return (
    <Nav className="justify-content-center bg-light " activeKey="/home" sticky="top" >
    <Navbar.Brand href="/login" className="Marvel">MRX</Navbar.Brand>
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/profile/post">Post</Nav.Link>
    </Nav.Item> 
    <Nav.Item>
      <Nav.Link href="/comic">Comics</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/message">Message</Nav.Link>
    </Nav.Item>

  </Nav>

    );
  }
}

export default NavbarPage;