import React, { useState } from "react";
import "./AuthPage.css"; // Import CSS for styling

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignup && <input type="password" placeholder="Confirm Password" required />}
          
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button onClick={toggleAuthMode} className="toggle-btn">
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
