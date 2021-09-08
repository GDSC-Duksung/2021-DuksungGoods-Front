import React, {useState} from 'react';
import Dropdown from './Dropdown';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';
// TODO: DROP down menu 만들기
  
const Navbar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);

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
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <NavLink to='/main' activeStyle>
            카테고리
          </NavLink> */}
         <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to='/whole'
              className='nav-links'
              onClick={closeMobileMenu}>
              카테고리 <i className='fas fa-caret-down' /></Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/watchlistpage'
              className='nav-links'
              onClick={closeMobileMenu}>
              관심목록</Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/notepage'
              className='nav-links'
              onClick={closeMobileMenu}>
              쪽지보내기
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/mypage'
              className='nav-links'
              onClick={closeMobileMenu}>
              마이페이지
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
  
export default Navbar;