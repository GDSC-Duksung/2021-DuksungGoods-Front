import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
  
export const Nav = styled.nav`
  background: #981B45;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const Menu =styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20%;
  list-style: none;
  text-align: center;
  width: 70vw;
`;

export const Items=styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  width: 7vw;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.9rem 1rem;
  min-width: 90px;
  &.active {
    background-color: #751636;
    border-radius: 1px;
    transition: all 0.2s ease-out;
  }
`;

export const DropLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 13px;
  color: black;
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;