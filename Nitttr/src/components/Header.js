import React from 'react';
import '../assets/css/fullpage.css';

function Header() {
  return (
    <header>
      <div className="Header" id="myHeader">
      <div className="container">
        <div className="logo">
          <a href="http://localhost:3000/"> <img src="/images/logo.png" alt="NITTTR Chennai Logo" /> </a>
        </div>
        <div className="header-text">
          <h1>National Institute of Technical Teachers Training and Research</h1>
          <p>Institution Deemed to be University under District Category, A Centrally Funded Technical Institute</p>
          <p>Ministry of Education, Government of India, Taramani, Chennai - 600 113</p>
        </div>
      </div>
      <div className="header-links">
        <nav>
          <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
    );
}

export default Header;
