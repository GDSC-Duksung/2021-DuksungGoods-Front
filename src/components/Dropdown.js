import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';
// const DropLink = styled(Link)`
//   display: block;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
//   color: #fff;
//   padding: 16px;
// `;

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

          <li><Link
                className='dropdown-link'
                to='/whole'
                onClick={() => setClick(false)}
              >전체 보기</Link></li>
              <li><Link
              className='dropdown-link'
                to='/ficti'
                onClick={() => setClick(false)}
              >가수요조사</Link></li>
              <li><Link
              className='dropdown-link'
                to='/actual'
                onClick={() => setClick(false)}
              >실수요조사</Link>
          </li>
        {/* {MenuItems.map((item, index) => {
        //   return (
        //     // <li key={index}>
        //     //   <Link
        //     //     className={item.cName}
        //     //     to={item.path}
        //     //     onClick={() => setClick(false)}
        //     //   >
        //     //     {item.title}
        //     //   </Link>
        //     // </li>
        //   );
        })} */}
      </ul>
    </>
  );
}

export default Dropdown;