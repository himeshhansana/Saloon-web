import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming you have some CSS styles in App.css

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Glamour</h1>
      <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
