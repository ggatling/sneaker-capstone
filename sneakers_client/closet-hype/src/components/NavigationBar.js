import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
const NavigationBar = () => {
  const Styles = styled.div`
    .navbar {
      background-color: white;
    }
    .navbar-brand,
    .navbar-nav .nav-link {
      color: #bbb;
      font-weight: 600;
      &:hover {
        color: white;
      }
    }
  `;
  return (
    <div>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Closet Hype</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/sneakers">Sneakers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/clothes">Clothes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/logout">Log Out</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>{" "}
    </div>
  );
};
export default NavigationBar;
