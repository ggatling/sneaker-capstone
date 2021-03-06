import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
  .navbar{
    background-color: black;
  }
  .navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = ()=>(
  <Styles>
    <Navbar expand ="lg">
      <Navbar.Brand href="/">Closet Hype</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/sneakers">Sneakers</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/clothes">Clothes</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/profile">Closet</Nav.Link></Nav.Item>
        </Nav>
    </Navbar>
  </Styles>
)
