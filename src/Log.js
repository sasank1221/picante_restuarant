import React, { useState } from 'react';
import './Log.css';
import logo from './images/logo.jpg';
import Login from './Login';
import Signup from './Signup';

function Log() {
  const [showLogin, setShowLogin] = useState(true); // Initially show the Login component

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div className="Log">
      <img src={logo} alt="Logo" className="full-window-image" />
      
      <div className="navbar">
        <ul>
          <li>
            <button onClick={() => setShowLogin(true)}>Login</button> {/* Set showLogin to true */}
          </li>
          <li>
            <button onClick={() => setShowLogin(true)}>Signup</button> {/* Set showLogin to false */}
          </li>
        </ul>
      </div>

      {/* Conditionally render either Login or Signup based on showLogin state */}
      {showLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default Log;
