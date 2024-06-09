import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo1 from './image/logo1.png'


const Navbar = () => {
  return (
    <>
      <nav id="nav_top">
        <img src={logo1} alt="Logo" />
        <nav id="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Add link for Contact if needed */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button>Buy Beer</button>
        <i className="ri-menu-line"></i>
      </nav>
    </>
  );
}

export default Navbar;
