import React from 'react';
import '../assets/css/fullpage.css';

function HeroSection() {
  return (
    <section className="hero">
      <img src="/images/hero image.jpg" alt="Hero" />
      <div className="overlay">
        <div className="hero-content">
          <h2>Innovate. Share. Excel</h2>
          <p>OER are freely accessible materials for learning and facilitate seamless sharing, customization, and innovation, advancing educational equity with elegance.</p>
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for ?" />
            <div className="search-bar2">
              <select id="department" name="department">
                <option value="" disabled selected>Select department</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="Educational Media and Technology">Educational Media and Technology</option>
                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Education">Education</option>
                <option value="Rural and Entrepreneurship Development">Rural and Entrepreneurship Development</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;