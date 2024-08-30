import React from 'react';
import '../assets/css/fullpage.css';

function OerSection() {
  return (
    <div className="oer-section">
      <div className="oer-content">
        <div className="oer-video">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/your-video-id" 
            title="What is OER?" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="oer-text">
          <h2>What is OER?</h2>
          <p>OER are freely and publicly available teaching, learning, and research resources that reside in the public domain or have been released under an intellectual property license that permits their free use and re-purposing by others.</p>
        </div>
      </div>
    </div>
  );
}

export default OerSection;
