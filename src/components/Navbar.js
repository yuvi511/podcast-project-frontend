import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#343a40" }}>
      <nav class="navbar navbar-expand-lg bg-dark  navbar-light px-5">
        <Link to="/" className="navbar-brand">
          <span className="logo-text text-light fw-bold">PODSTAR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#343a40", color: "#20a84f" }}
        >
          <div>
            <span class="navbar-toggler-icon"></span>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              <Link to="/" className="nav-link text-light">
                Dashboard
              </Link>
            </a>
            <a class="nav-item nav-link" href="/all">
              <Link to="/all" className="nav-link text-light">
                All
              </Link>
            </a>
            <a class="nav-item nav-link" href="/upload">
              <Link to="/upload" className="nav-link text-light">
                Upload
              </Link>
            </a>
            <a class="nav-item nav-link" href="/login">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </a>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="logo-text text-light">PODSTAR</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all" className="nav-link text-light">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upload" className="nav-link text-light">
                  Upload
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
