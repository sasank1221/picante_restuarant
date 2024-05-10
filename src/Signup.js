import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks for empty fields
    if (!username.trim() || !password.trim() || !rePassword.trim()) {
      setError('All fields are mandatory');
      return;
    }

    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make a POST request to store user information in MongoDB
      await axios.post('https://picante-backendfile.onrender.com/signup', { username, password });
      // Navigate to the login page after successful signup
      navigate('/login');
    } catch (error) {
      setError('Error signing up');
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="Signup">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <div className="Signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '270px' }}
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
              style={{ width: '270px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repassword">Re-enter Password:</label>
            <input
              type="password"
              id="repassword"
              placeholder="Re-enter your password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              style={{ width: '270px' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
