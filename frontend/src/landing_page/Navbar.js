import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </a>
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
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/product">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/support">
                  Support
                </a>
              </li>
              {/* Add this link for the dashboard */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://stock-trading-website-dashboard.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
