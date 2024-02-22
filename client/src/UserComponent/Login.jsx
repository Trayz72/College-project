import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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

      // Check if the login was successful and if it was an admin or user login
      if (response.data.message === "Admin login successful") {
        // Redirect to the admin page if it's an admin login
        navigate("/admin");
      } else if (response.data.message === "User login successful") {
        // Redirect to the home page if it's a user login
        navigate("/home");
      } else {
        // Handle other cases or show an error message
        console.error("Unexpected login response:", response.data.message);
      }
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
            Don't have an account? <Link to="/register">Click here</Link>
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
          <Link className="btn btn-primary" to="/" role="button">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
