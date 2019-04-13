import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function NaviBar(props) {
    return (
        <div>
        <Navbar color="light" light expand="md" className="mb-3">
          <NavbarBrand>Google Books</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved/">Saved</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

export default NaviBar;