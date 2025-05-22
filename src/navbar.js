import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/article">Articles</Link></li>
        <li><Link to="/article/:articleId">Articles List</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;