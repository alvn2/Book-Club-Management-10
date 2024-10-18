import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
<<<<<<< HEAD
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/join-bookclub">Join a Book Club</Link>
      <Link to="/discuss">Discuss</Link>
      <Link to="/create-bookclub">Create a Book Club</Link>
      <Link to="/bookclubs">Book Clubs</Link>
      <Link to="/booklist">Book List</Link>
      <Link to="/addbook">Add a Book</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
=======
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/join-bookclub">Join a Book Club</Link>
        <Link to="/discuss">Discuss</Link>
        <Link to="/create-bookclub">Create a Book Club</Link>
        <Link to="/bookclubs">Book Clubs</Link>
        <Link to="/book-list">Book List</Link> {/* Updated to match route */}
        <Link to="/add-book">Add a Book</Link> {/* Updated to match route */}
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    );
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
}

export default Navbar;
