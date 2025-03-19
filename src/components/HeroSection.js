import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted id="video">
        <source
          src="https://videos.pexels.com/video-files/5240956/5240956-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Section Content */}
      <h1>Challenges Await</h1>
      <p>What are you waiting for?</p>

      {/* Buttons */}
      <div className="hero-btns">
        <Link to="/challenges">
          <button className="btn btn--outline">View Challenges</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn--primary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
