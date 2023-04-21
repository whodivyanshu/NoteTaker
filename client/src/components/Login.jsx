import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/signin', {
        username: username,
        password: password,
      });
      alert('Sign In Successfully');
    } catch (err) {
      alert('Error occurred while logging user');
    }
  };



  return (
    <div className="mlogin">
      <h1>Welcome to NoteTaker</h1>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>Forgot Password</p>

        <br />
        <button type="submit">Sign In</button>
        
          <Link to="/create">
        <p>
          Create Account
          </p>
          </Link>
      </form>
    </div>
  );
};

export default Login;
