import React, { useState } from 'react';
import './Header.css'; // Add styles for the header

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="25" fill="black" />
          <text x="50%" y="50%" fill="yellow" fontSize="18" fontWeight="bold" textAnchor="middle" dy=".3em">AP</text>
        </svg>
      </div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
