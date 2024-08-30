import React from 'react';
import '../assets/css/fullpage.css';

function HowToUse() {
  return (
    <div className="howtouse">
      <div className="heading"><h1>HOW TO USE</h1></div>
      <div className="cards">
      <div className="card">
        <div className="card-image">
          <iframe 
            width="100%" 
            height="200" 
            src="/videos/Course Planning and Delivery _ Curriculum Gap .mp4"
            title="How To Create a Profile" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="card-title">How To Create a Profile</div>
      </div>

      <div className="card">
        <div className="card-image">
          <iframe 
            width="100%" 
            height="200" 
            src="/videos/HR in Automotive Industry .mp4" 
            title="How To Search" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="card-title">How To Search</div>
      </div>
      </div>
    </div>
  );
}

export default HowToUse;
