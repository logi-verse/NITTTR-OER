import React from 'react';
import '../assets/css/fullpage.css';

function Footer() {
  return (
    <div className="footer">
        <div class="footer-content">
            <div class="footer-column1">
                <h2>NITTTR EXTENSION CENTERS</h2>
                <hr />
                <p>Bengaluru</p>
                <p>Hyderabad</p>
                <p>Kalamassery</p>
                <p>Vijayawada</p>
            </div>
            <div class="footer-column2">
                <h2>CONTACT US</h2>
                <hr />
                <p>NITTTR Helpdesk</p>
                <p>Your Question</p>
                <p>Maps & Directions</p>
                <p>Campus Tour</p>
            </div>
            <div class="footer-column3">
                <h2>QUICK LINKS</h2>
                <hr />
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Collection Policy</p>
            </div>
            <div className="logo2">
         <a href= "http://localhost:3000/"> <img src="/images/logo.png" alt="NITTTR logo" /> </a>
      </div>
      </div>  

      <div class="footer-bottom">
        <hr />
            <p>copyright © 2024, National Institute of Technical Teachers Training and Research Chennai<br />
               Designed & Developed by Web Team NITTTR Chennai</p>
        </div>
    </div>
  );
}

export default Footer;
