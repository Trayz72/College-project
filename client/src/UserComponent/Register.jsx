import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!contactNo || !contactNo.trim()) {
    //   console.error("Contact number cannot be empty");
    //   return;
    // }
    // console.log("Registration request values:", {
    //   username,
    //   password,
    //   email,
    //   contactNumber,
    // });

    try {
      const response = await axios.post("http://localhost:3030/register", {
        username,
        password,
        email,
        contactNumber,
      });

      navigate("/home");
    } catch (error) {
      console.error("Error registering user:", error.response.data.error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
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
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNo" className="form-label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              aria-describedby="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Register
          </button>
          <Link className="btn btn-primary" to="/" role="button">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
