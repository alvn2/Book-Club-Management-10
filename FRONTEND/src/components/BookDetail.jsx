import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/Api';

const BookDetail = () => {
  const { id } = useParams();
  const [bookClub, setBookClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookClub = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/bookclubs/${id}`
        );
        setBookClub(response.data);
      } catch (error) {
        console.error("Error fetching book club details:", error);
        setError("Error fetching book club details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookClub();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!bookClub) return <div>No book club found.</div>;

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