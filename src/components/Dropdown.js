import React, { useState } from 'react';

import './Dropdown.css';
import './NavbarElements';
import { DropLink} from './NavbarElements';


function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
          <li><DropLink to='/whole' onClick={() => setClick(false)}>전체 보기</DropLink></li>
          <li><DropLink to='/ficti' onClick={() => setClick(false)}>가수요조사</DropLink></li>
          <li><DropLink to='/actual' onClick={() => setClick(false)}>실수요조사</DropLink></li>
      </ul>
    </>
  );
}

export default Dropdown;