import React from 'react';
import '../assets/css/fullpage.css';

function Details() {
  return (
    <div className="details">
      <div className="box">
        <img src="/images/what we do.png" alt="What We Do" />
        <h2>What We Do</h2>
        <p>We provide open-access learning, teaching, and research materials in various formats, all available for free use, adaptation, and redistribution under public domain or open licenses.</p>
      </div>
      <div className="box">
        <img src="/images/resources.png" alt="Resources" />
        <h2>Resources</h2>
        <p>We provide a variety of freely accessible resources, including textbooks, research papers, multimedia content, data sets, and teaching materials, available for use.</p>
      </div>
      <div className="box">
        <img src="/images/news.png" alt="News & Events" />
        <h2>News & Events</h2>
        <p>Get the latest on open-access education with updates on new materials, events, and initiatives connecting educators and learners.</p>
      </div>
    </div>
  );
}

export default Details;
