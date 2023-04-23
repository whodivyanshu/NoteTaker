import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/signup", {
        username: username,
        password: password,
      });
      // alert("created user successfully");
      navigate(`/body?username=${username}`)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mlogin">
      <h1>Welcome to NoteTaker</h1>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        {/* <p>Forgot Password</p> */}

        <br />
        <button type="submit">Sign Up</button>
        <Link to="/">
          <p>Sign In</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
