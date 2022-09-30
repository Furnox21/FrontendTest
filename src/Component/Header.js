import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="black" light expand="md">
        <NavbarBrand href="/">Student L</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
};

export default Header;
