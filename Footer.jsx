import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-advanced">
      <div className="footer-columns">
        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="icon" /> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p><FaPhone className="icon" /> +1 (123) 456-7890</p>
          <p><FaMapMarkerAlt className="icon" /> Dallas, TX</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Raasi Gunnala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
