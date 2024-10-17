<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Services/Api";
import axios from "axios";
=======
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/Api';
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

const BookDetail = () => {
  const { id } = useParams();
  const [bookClub, setBookClub] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState("");
=======
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

  useEffect(() => {
    const fetchBookClub = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(
          `http://127.0.0.1:5000/bookclubs/${id}`
        );
        setBookClub(response.data);
      } catch (error) {
        console.error("Error fetching book club details:", error);
        setError("Error fetching book club details. Please try again later.");
=======
        const response = await api.get(`/book-clubs/${id}`);
        setBookClub(response.data);
      } catch (error) {
        console.error('Error fetching book club details:', error);
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      } finally {
        setLoading(false);
      }
    };

    fetchBookClub();
  }, [id]);

  if (loading) return <div>Loading...</div>;
<<<<<<< HEAD
  if (error) return <div>{error}</div>;
  if (!bookClub) return <div>No book club found.</div>;
=======
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

  return (
    <div>
      <h1>{bookClub.name}</h1>
      <h2>Description</h2>
      <p>{bookClub.description}</p>
      <h2>Owner</h2>
      <p>{bookClub.owner}</p>
      <h2>Books</h2>
      <ul>
        {bookClub.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetail;