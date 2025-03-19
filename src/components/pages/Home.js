import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection />

      {/* Section Wrapper for Better Layout */}
      <section className="content-section">
        <div className="content-wrapper">
          <h2>Explore New Possibilities</h2>
          <p>
          A premium CTF experience with challenging puzzles, real-world scenarios, and a competitive leaderboard. Sharpen your cybersecurity skills and rise to the top.
          </p>
        </div>

        <Cards />
      </section>
    </>
  );
}

export default Home;
