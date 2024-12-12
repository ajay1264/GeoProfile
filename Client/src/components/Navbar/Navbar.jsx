import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
