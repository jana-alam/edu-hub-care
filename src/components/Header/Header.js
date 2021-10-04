import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-1.png";
import "./Header.css";

const Header = () => {
  return (
    // Header Area
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </NavLink>
        <Nav className="ms-auto">
          <NavLink
            activeStyle={{
              color: "#f50057",
              borderBottom: "2px solid #f50057",
            }}
            to="/home"
            className="nav-link me-4 px-0"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{
              color: "#f50057",
              borderBottom: "2px solid #f50057",
            }}
            to="/about-us"
            className="nav-link me-4 px-0"
          >
            About-us
          </NavLink>
          <NavLink
            activeStyle={{
              color: "#f50057",
              borderBottom: "2px solid #f50057",
            }}
            to="/courses"
            className="nav-link me-4 px-0"
          >
            Courses
          </NavLink>
          <NavLink
            activeStyle={{
              color: "#f50057",
              borderBottom: "2px solid #f50057",
            }}
            to="/contact"
            className="nav-link px-0"
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
