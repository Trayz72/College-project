import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3030/login", {
        username,
        password,
      });

      console.log(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="emailHelp" className="form-text">
            Don't have an account? <a href="/register">Click here</a>
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
          <a className="btn btn-primary" href="/" role="button">
            Back
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
