/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          Quick News
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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onClick={toggleDropdown}
            >
              <button
                className="nav-link dropdown-toggle cursor-pointer"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More Categories
              </button>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              style={{ border: "1px solid" }}
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label text-light"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
