import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store registration errors
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://podstar-backend-deploy.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 201) {
        // Registration successful, redirect to login page
        history("/login");
      } else {
        const data = await response.json();
        setError(data.error || "Registration failed. Please try again."); // Display specific error message if available, otherwise a generic message
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred. Please try again."); // Generic error message for network or other errors
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #343a40, #1db954)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container mt-5">
        <div className="register-container">
          <h2 className="text-light mb-4">Register</h2>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-secondary text-center">
              Register
            </button>
            {error && <div className="text-danger mt-2">{error}</div>}{" "}
            {/* Display error message if there is an error */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
