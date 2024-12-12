import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>GeoProfile</h2>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <FaHome size={20} />
          Home
        </Link>
        <Link to="/admin" className="nav-link">
          <FaUser size={20} />
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
