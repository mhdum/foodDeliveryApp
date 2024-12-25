import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignInRedirect = () => {
    navigate("/signin"); 
  };

  return (
    <div className="landing-container">
      <h1>Welcome to Our Website</h1>
      <p>Join us today to start your delicious journey.</p>
      <button onClick={handleSignInRedirect}>Sign In</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LandingPage;
