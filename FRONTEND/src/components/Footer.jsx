import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Building community through books</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/bookclubs">Book Clubs</Link> 
            </li>
            <li>
              <Link to="/create-bookclub">Create Club</Link> 
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@bookclubapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Book Club App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
