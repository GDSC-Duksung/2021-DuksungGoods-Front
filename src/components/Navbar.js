import React, {useState} from 'react';
import Dropdown from './Dropdown';
import './NavbarElements';
import { Nav, Items ,NavLink, Menu} from './NavbarElements';
  
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
         <Items
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <NavLink to='/whole'>
              카테고리 <i className='fas fa-caret-down' /></NavLink>
            {dropdown && <Dropdown />}
          </Items>
          <Items>
            <NavLink to='/watchlistpage'>관심목록</NavLink>
          </Items>
          <Items>
            <NavLink to='/notepage'>쪽지보내기</NavLink>
          </Items>
          <Items>
            {/* <NavLink to='/mypage'>마이페이지</NavLink> */}
            <NavLink to ='/actdetail'>마이페이지</NavLink>
          </Items>
        </Menu>
      </Nav>
    </>
  );
};
  
export default Navbar;