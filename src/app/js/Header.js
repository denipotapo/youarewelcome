import React, { Component } from 'react';
import arrowIco from 'file!../../img/left-arrow.png';
import menuIco from 'file!../../img/menu.png';

const Header = props => (
  <header className="contact">
    <img src={arrowIco} width="25px" height="25px" alt="" onClick={props.showLoginForm} />
    <p>@Bender</p>
    <img src={menuIco} width="25px" height="25px" alt="" />
  </header>
);

export default Header;
