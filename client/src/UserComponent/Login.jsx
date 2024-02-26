import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post("http://localhost:3030/login", {
        username,
        password,
      });

      setResponse(loginResponse); // Update the response state

      console.log(loginResponse.data.message);

      if (loginResponse.data.message.includes("login successful")) {
        // setUserId(loginResponse.data.userId);
        setUserId(loginResponse.data.userId);

        // Set the response in the state
        setResponse(loginResponse);

        if (loginResponse.data.message.includes("Admin")) {
          navigate("/admin");
        } else if (loginResponse.data.message.includes("User")) {
          navigate(`/home/${loginResponse.data.userId}`);
        } else if (loginResponse.data.message.includes("Worker")) {
          navigate("/workerDashboard");
        } else {
          console.error(
            "Unexpected login response:",
            loginResponse.data.message
          );
        }
      }
    } catch (error) {
      console.error("Error logging in:", error.response.data.error);
    }
  };

  useEffect(() => {
    // This will log the updated userId after it's set
    if (response && response.data && response.data.userId) {
      console.log("userId:", response.data.userId);
    }
  }, [response]);

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
