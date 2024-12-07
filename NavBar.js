import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark slide-in-left">
      <div className="container">
        <a className="navbar-brand" href="#home">berimbolo-security</a>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#reviews">Reviews</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
