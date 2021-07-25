import React from 'react';
import LoginButton from '../components/buttons/LoginButton';
import SignupButton from '../components/buttons/SignupButton';

const HomePage = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Koh Tao Entry</h1> 
        <h1>Information Form</h1>
      </div>
      <div>
        <img src={require("../images/KTR_shield.jpeg").default} alt="" id="ktr-shield"/>  
      </div>
      <div>
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  );
};

export default HomePage;