import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';


export default function Navbar() {
  const location = useLocation();
  const allowedPaths = ['/about', '/experience', '/contact'];

  // State to control navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!allowedPaths.includes(location.pathname.toLowerCase())) {
    return null;
  }

  const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'About', path: '/about', icon: <FaUserAlt /> },
  { name: 'Experience', path: '/experience', icon: <FaBriefcase /> },
  { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
];


  return (
    <header className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="navbar-container">
        <div className="logo">
  <Link to="/" className="logo-circle">
    RG
  </Link>
</div>
<ul className="nav-links">
  {navItems.map((item) => (
    <li key={item.name}>
      <Link
        to={item.path}
        className={location.pathname.toLowerCase() === item.path.toLowerCase() ? 'active-link' : ''}
      >
        <span className="nav-icon">{item.icon}</span>
        {item.name}
      </Link>
    </li>
  ))}
</ul>
      </nav>
    </header>
  );
}
