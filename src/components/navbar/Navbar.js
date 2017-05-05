import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import './Navbar.css'

const NavBar = props => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#Home'>Chloé Rice, Interactive Developer</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href='#About'>ABOUT</NavItem>
        <NavItem eventKey={2} href='#Projects'>PROJECTS</NavItem>
        <NavItem eventKey={3} href='#Contact'>CONTACT</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
