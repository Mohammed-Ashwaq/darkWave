import React, { useState } from "react";
import "./ChallengesPage.css";
import Modal from "./Modal";

const challenges = [
  {
    title: "Decryption",
    solves: 42981,
    difficulty: "Easy",
    description: "Decrypt the secret message to solve this challenge.",
    image: "/image/ceaser.jpeg"
    
  },
  {
    title: "Time Machine",
    solves: 37342,
    difficulty: "Easy",
    imageUrl: "/images/time_machine.png",
    altText: "Time Machine Concept",
    description: "Use historical data to predict the future!"
  },
  {
    title: "Forensics Hunt",
    solves: 25000,
    difficulty: "Medium",
    imageUrl: "/images/forensics_hunt.png",
    altText: "Forensic Investigation",
    description: "Analyze the given files and uncover hidden secrets."
  }
];

const ChallengesPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div className="challenges-container">
      <h1>Challenges</h1>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="challenge-card"
            onClick={() => setSelectedChallenge(challenge)}
          >
            <h2>{challenge.title}</h2>
            <img 
              src={challenge.imageUrl} 
              alt={challenge.altText} 
              className="challenge-image"
            />
            <p>Solves: {challenge.solves}</p>
            <p>Difficulty: {challenge.difficulty}</p>
          </div>
        ))}
      </div>

      {/* Multiple Modals - Display dynamically */}
      {selectedChallenge && (
        <Modal
          isOpen={true}
          title={selectedChallenge.title}
          imageUrl={selectedChallenge.imageUrl}
          description={selectedChallenge.description}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </div>
  );
};

export default ChallengesPage;
