import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {
  return (
    <div>
      <Link to="/SignupPage">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default SignupButton;