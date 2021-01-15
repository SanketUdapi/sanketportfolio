import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.ico";
import "./mynavbar.style.css";

const MyNavbar = () => {
  return (
    <>
    <Navbar fixed="top" expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between ">
    <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="My Portfolio Logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className=" ml-auto px-2">
      <Nav.Link className="link"  href="#home">Home</Nav.Link>
      <Nav.Link  href="#about">About Me</Nav.Link>
      <Nav.Link  href="#skills">Skills</Nav.Link>
      <Nav.Link  href="#projects">Projects</Nav.Link>
      <Nav.Link  href="#contact">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
};

export default MyNavbar;