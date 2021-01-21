import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="main-home-navbar">
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link main-home-nav" to="/">Accueil <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav" to="/medcins">Tous les medcins</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/"> test  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/apropos">Apropos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;