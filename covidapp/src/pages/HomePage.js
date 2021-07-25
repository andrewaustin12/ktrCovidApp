import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Koh Tao Entry</h1> 
        <h1>Information Form</h1>
      </div>
      <div>
        <img src={require("../images/KTR_shield.jpeg").default} alt="" id="ktr-shield"/>  
      </div>
      <div>
        <button>Login</button>
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default HomePage;