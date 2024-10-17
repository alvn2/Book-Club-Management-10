<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/Api';
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

const BookClubList = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState("");
=======
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

  useEffect(() => {
    const fetchBookClubs = async () => {
      setLoading(true);
      try {
<<<<<<< HEAD
        const response = await axios.get("http://127.0.0.1:5000/bookclubs");
        setBookClubs(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Error fetching book clubs. Please try again.");
=======
        const response = await api.get('/book-clubs');
        setBookClubs(response.data);
      } catch (error) {
        console.error('Error fetching book clubs:', error);
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      } finally {
        setLoading(false);
      }
    };

    fetchBookClubs();
  }, []);

  if (loading) return <div>Loading...</div>;
<<<<<<< HEAD
  if (error) return <div>{error}</div>;
  if (bookClubs.length === 0) return <div>No book clubs available.</div>;
=======
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

  return (
    <div>
      <h2>Available Book Clubs </h2>
      <ul>
        {bookClubs.map((club) => (
          <li key={club.id}>
            <Link to={`/book-clubs/${club.id}`}>{club.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookClubList;