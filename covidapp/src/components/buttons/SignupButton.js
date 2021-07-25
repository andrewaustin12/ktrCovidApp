import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {
  return (
    <div>
      <Link to="/SignupPage">
        <button className="signupbutton">Sign Up</button>
      </Link>
    </div>
  );
};

export default SignupButton;