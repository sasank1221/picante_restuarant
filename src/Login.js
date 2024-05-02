import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // useNavigate hook replaces useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are admin
    if (username === 'admin' && password === 'admin') {
      // Set loggedIn state to true after successful login
      setLoggedIn(true);
      // Redirect to home page
      navigate('/home1'); // Use navigate function to redirect
    }else{
      alert("username and password incorrect");
    }
  };

  // If user is already logged in, redirect to home page
  if (loggedIn) {
    navigate('/home'); // Use navigate function to redirect
  } 

  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
