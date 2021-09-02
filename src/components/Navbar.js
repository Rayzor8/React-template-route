import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul className="flex justify-center items-center gap-8 App bg-yellow-400 py-4 font-semibold text-blue-800">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
    </ul>
  );
}

export default Navbar;
