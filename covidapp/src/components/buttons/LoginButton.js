import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div>
      <Link to="/">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;