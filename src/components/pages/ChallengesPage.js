import React, { useState } from "react";
import "../pages/ChallengesPage.css";
import "../pages/Models/ChallengesModel.css";

const challenges = [
  {
    title: "Unveil",
    solves: 42981,
    difficulty: "Easy",
    imageUrl: "/images/ceaser.jpeg",
    altText: "Caesar of Rome",
    fileUrl: "/files/unveil.txt",
    description: "Unveil the message hidden behind the cryptic key.",
    hint: "Think about famous ciphers used by Roman leaders, Count the Days of the week, Use 2x Alphabets Upper and Lower case.",
    correctFlag: "DWK{alphaonlYflag}"
  },
  {
    title: "Captain-Atom",
    solves: 37342,
    difficulty: "Medium",
    fileUrl: "/files/Captain-atom.txt",
    description: "Solve the riddle of the atom.",
    correctFlag: "DKW{5f1216cf2bd259b59abe5ddcbd4509e8}"
  },
  {
<<<<<<< HEAD
    title: "Super SSH",
    solves: 51325,
    difficulty: "Hard",
    description: "Break into the secure shell to get the flag.",
    correctFlag: "flag{ssh_key}"
  },
  {
    title: "Commitment Issues",
    solves: 23903,
    difficulty: "Easy",
    description: "Analyze git commits for hidden secrets.",
    correctFlag: "flag{git_commit}"
  },
=======
    title: "Mr India",
    solves: 51325,
    difficulty: "Medium",
    fileUrl: "/files/Mr-India.txt",
    description: "Download and the read the challenge file carefully to solve the challegnge.",
    hint: "This tells search engines what to and what not to avoid.",
    correctFlag: "DKW{R0b0ts_St4y_0ut}"
  },
  {
    title: "Knock-nock Who's there?",
    solves: 23903,
    difficulty: "Medium",
    description: "Find whos behind the door",
    fileUrl: "/files/knock.txt",
    hint: "1. This challenge tests you're Reconnaissance skill, Find the proxy, after solving the challege place the keyword between the flag format ex: DWk{you're answer}",
    correctFlag: "DWK{Cloudeflare}",
  },

>>>>>>> 969dfae (added 3 more challenges)
  {
    title: "Blame Game",
    solves: 20339,
    difficulty: "Medium",
    description: "Track changes to find the flag.",
    correctFlag: "flag{git_blame}"
  }
];

const ChallengesPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [flagInput, setFlagInput] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  
  const handleSubmitFlag = () => {
    if (!selectedChallenge) return;

    if (flagInput.trim() === selectedChallenge.correctFlag) {
      alert("✅ Correct! You solved the challenge.");
    } else {
      alert("❌ Incorrect flag. Try again.");
    }

    setFlagInput(""); 
  };


  const filteredChallenges =
    difficultyFilter === "All"
      ? challenges
      : challenges.filter(
          (challenge) =>
            challenge.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
        );

  return (
    <div className="challenges-container">
      <h1>Challenges</h1>

      
      <div className="filter-container">
        <label htmlFor="difficulty">Filter by Difficulty: </label>
        <select
          id="difficulty"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="challenges-grid">
        {filteredChallenges.map((challenge, index) => (
          <div
            key={index}
            className="challenge-card"
            onClick={() => {
              setSelectedChallenge(challenge);
              setShowHint(false);
              setFlagInput("");
            }}
          >
            <h2>{challenge.title}</h2>
            <p>Solves: {challenge.solves}</p>
            <p>Difficulty: {challenge.difficulty}</p>
          </div>
        ))}
      </div>

      
      {selectedChallenge && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedChallenge.title}</h2>

            
            {selectedChallenge.imageUrl && (
              <img
                src={selectedChallenge.imageUrl}
                alt={selectedChallenge.altText || "Challenge Image"}
                className="modal-image"
              />
            )}

            <p><strong>Solves:</strong> {selectedChallenge.solves}</p>
            <p><strong>Difficulty:</strong> {selectedChallenge.difficulty}</p>
            <p>{selectedChallenge.description}</p>

            
            {selectedChallenge.hint && (
              <button
                className="hint-btn"
                onClick={() => setShowHint(!showHint)}
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
            )}

           
            {showHint && <p className="hint-text">{selectedChallenge.hint}</p>}

            
            {selectedChallenge.fileUrl && (
              <a href={selectedChallenge.fileUrl} download className="download-btn">
                ⬇ Download Challenge File
              </a>
            )}

            
            <div className="flag-submission">
              <input
                type="text"
                placeholder="Enter your flag"
                value={flagInput}
                onChange={(e) => setFlagInput(e.target.value)}
                className="flag-input"
              />
              <button className="submit-btn" onClick={handleSubmitFlag}>
                Submit Flag
              </button>
            </div>

            <button className="close-btn" onClick={() => setSelectedChallenge(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesPage;
