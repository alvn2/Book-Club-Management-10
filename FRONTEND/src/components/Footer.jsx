import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Building community through books.</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookclubs">Book Clubs</Link></li>
            <li><Link to="/create-bookclub">Create Club</Link></li>
            <li><Link to="/join-bookclub">Join a Club</Link></li>
            <li><Link to="/discuss">Discuss</Link></li>
            <li><Link to="/book-list">Book List</Link></li>
            <li><Link to="/add-book">Add a Book</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@bookclubapp.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Book Club App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
