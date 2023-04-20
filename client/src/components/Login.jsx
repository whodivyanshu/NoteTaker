import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/signin', {
        username: username,
        password: password,
      });
      alert('User created successfully');
    } catch (err) {
      alert('Error occurred while logging user');
    }
  };

  const handleCreateAccount = () => {
    navigate('/SignUp');
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
        <p onClick={handleCreateAccount}>Create Account</p>
      </form>
    </div>
  );
};

export default Login;
