import React from "react";
import '../assets/css/fullpage.css';

function ExploreVideos() {
  return (
    <div className="explore-videos">
      <div className="head">
        <h1>EXPLORE VIDEOS</h1>
      </div>
      <div className="carousel">
        <button className="nav-btn prev-btn">&#8592;</button>
        <div className="pages">
          <div className="page">
            <img src="/images/we are recuriting.png" alt="Recruitments" />
            <h3>RECRUITMENTS</h3>
            <p>TECHING AND NON-TECHING POST</p>
            <button className="details-btn">MORE DETAILS</button>
          </div>
          <div className="page">
            <img src="/images/swayam.png" alt="Swayam" />
            <h3>SWAYAM</h3>
            <p>SWAYAM COURSES OFFERED</p>
            <button className="details-btn">MORE DETAILS</button>
          </div>
          <div className="page">
            <img src="/images/exam results.png" alt="NITTTR Exam Registration" />
            <h3>NITTTR Exam Registration</h3>
            <p>EXAM REGISTRATION</p>
            <button className="details-btn">MORE DETAILS</button>
          </div>
        </div>
        <button className="nav-btn next-btn">&#8594;</button>
      </div>
    </div>
  );
}

export default ExploreVideos;
