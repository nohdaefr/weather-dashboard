import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Make sure the path to the CSS file is correct

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // A simple validation for demonstration
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard'); // Navigate to the dashboard upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page">  {/* This div now has the class 'login-page' */}
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default LoginPage;

