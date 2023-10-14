import React from "react";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand fixed-bottom">
        <ul className="navbot navbar-nav justify-content-center w-100">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Create
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
