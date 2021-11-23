import React, { useState } from "react";
import "./NavbarElements";
import { Nav, Items, NavLink, Menu } from "./NavbarElements";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Nav>
        <Menu>
          <Items onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to="/ficti">가수요조사</NavLink>
          </Items>
          <Items>
            <NavLink to="/actual">실수요조사</NavLink>
          </Items>
          <Items>
            <NavLink to="/notepage">쪽지보내기</NavLink>
          </Items>
          <Items>
            <NavLink to="/my">마이페이지</NavLink>
          </Items>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
