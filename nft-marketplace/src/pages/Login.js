import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login & Sign-Up

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {isSignUp && <input type="email" placeholder="Email" />} {/* Show email input for Sign-Up */}

        <button className="login-btn">{isSignUp ? "Sign Up" : "Log In"}</button>

        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
          {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
