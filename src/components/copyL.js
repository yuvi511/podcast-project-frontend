
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="login-container">
        <h2 className="text-dark mb-4">Login</h2>
        <form className="login-form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-dark">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-dark">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
