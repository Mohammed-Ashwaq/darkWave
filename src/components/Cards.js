import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      {/* First Section */}
      <div className="cards__section">
        <CardItem
          title="Diverse Challenges"
          description="From web exploitation to cryptography, binary analysis to forensics - test your skills across various domains."
          label="Technology"
          path="/tech"
        />
        <CardItem
          title="Competitive Scoring"
          description="Earn points for each challenge you solve and compare your progress on our real-time leaderboard."
          label="Nature"
          path="/nature"
        />
        <CardItem
          title="Real-World Skills"
          description="Develop practical cybersecurity skills through challenges inspired by real-world scenarios."
          label="Business"
          path="/business"
        />
      </div>

      {/* "How It Works" Section (Now below the first three cards) */}
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="cards__container">
          <CardItem
            icon="🔹"
            step="1"
            title="Register"
            description="Create your account to access all challenges and track your progress."
          />
          <CardItem
            icon="🧠"
            step="2"
            title="Solve Puzzles"
            description="Tackle a variety of security challenges across different categories and difficulty levels."
          />
          <CardItem
            icon="🚩"
            step="3"
            title="Capture Flags"
            description="Find the hidden flags and submit them to earn points for your solutions."
          />
          <CardItem
            icon="🏆"
            step="4"
            title="Climb the Ranks"
            description="Compete with others and rise through the global leaderboard as you solve more challenges."
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
