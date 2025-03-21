import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
};