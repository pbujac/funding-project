import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import Basket from './Basket';
import Search from './Search';

const Header = () => (
  <header className="header">
    <Logo />
    <Nav />
    <ul className="header__right-menu">
      <li>
        <Basket />
      </li>
      <li>
        <Search />
      </li>
    </ul>
  </header>
);

export default Header;
