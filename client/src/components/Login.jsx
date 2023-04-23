import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-26qi.onrender.com/signin', {
        username: username,
        password: password,
      });
      // alert('Sign In Successfully');
      navigate(`/body?username=${username}`)
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
