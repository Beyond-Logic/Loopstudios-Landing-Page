import React from "react";
import { Link } from "react-router-dom";
import "../components/NavbarHero.css";

function Navbar() {
  return (
    <div className="container-fluid navbar-header hero-bg">
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Loopstudios
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav d-flex">
              <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-standout">
              <h1>
                Immersive <br /> experiences <br /> that deliver
              </h1>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
