import React, { useState, useEffect } from 'react';
import './Log.css';
import logo from './images/logo.jpg';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage'; // Corrected component import

function Log({ initialRender, onInitialRender }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  useEffect(() => {
    if (initialRender) {
      // Handle initial render actions here, such as fetching data
      onInitialRender();
    }
  }, [initialRender, onInitialRender]);

  return (
    <div className="Log">
      <img src={logo} alt="Logo" className="full-window-image" />
      
      <div className="navbar">
        <ul>
          <li>
            <button onClick={() => setShowLogin(true)}>Login</button>
          </li>
          <li>
            <button onClick={() => setShowLogin(false)}>Signup</button>
          </li>
        </ul>
      </div>

      {/* Conditionally render the signup, login form, or Home component */}
      {loggedIn ? (
        <Homepage onLogout={handleLogout} />
      ) : showLogin ? (
        <Login />
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Log;
