import React from 'react';
import './Nav.css';
import logo from './assets/teslaLogoSmall.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <a href="https://www.tesla.com/"> <img src={logo} alt="Tesla Logo" /> </a>

      <ul className='links'>
        <li> <a href="#">model s</a> </li>
        <li> <a href="#">model 3</a> </li>
        <li> <a href="#">model x</a> </li>
        <li> <a href="#">model y</a> </li>
        <li> <a href="#">solar roof</a> </li>
        <li> <a href="#">solar panels</a> </li>
      </ul>

      <ul className='links'>
        <li> <a href="#">shop</a> </li>
        <li> <a href="#">account</a> </li>
        <li> <a href="#">menu</a> </li>
      </ul>
    </nav>
  )
}

export default Nav
