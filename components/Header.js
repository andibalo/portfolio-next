import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import Link from "next/link";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <Link href="/">
          <a className="port-navbar-brand navbar-brand">Andi Usman Balo</a>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="port-navbar-item">
              <Link href="/">
                <a className="nav-link port-navbar-link">Home</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/about">
                <a className="nav-link port-navbar-link">About</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/portfolio">
                <a className="nav-link port-navbar-link">Portfolio</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/blog">
                <a className="nav-link port-navbar-link">Blog</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/cv">
                <a className="nav-link port-navbar-link">CV</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
