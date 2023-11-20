import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the custom CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store login errors
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://podstar-backend-deploy.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect to the homepage on successful login
        history("/");
      } else {
        // Handle unsuccessful login
        const data = await response.json();
        setError(data.error || "Login failed. Please try again."); // Display specific error message if available, otherwise a generic message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again."); // Generic error message for network or other errors
    }
  };

  const handleRegister = () => {
    history("/register");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #343a40, #1db954",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "400px" }}>
        <div className="login-container ">
          <h2 className="text-dark mb-4 head">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-dark">
                Username
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="mb-">
              <label htmlFor="password" className="form-label text-dark">
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
            <button type="submit" className="btn btn-success mt-3">
              Login
            </button>
          </form>
          {error && <div className="text-danger mt-2">{error}</div>}{" "}
          {/* Display error message if there is an error */}
          <button onClick={handleRegister} className="btn btn-secondary mt-3">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
