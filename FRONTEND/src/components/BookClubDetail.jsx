import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookClubDetail = () => {
  const { id } = useParams();
  const [bookClub, setBookClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookClub = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/bookclubs/${id}`
        );
        console.log("API Response:", response.data);
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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  if (!bookClub) return <div>No book club found.</div>;

  return (
    <div className="container">
      <h1 className="title">{bookClub.name}</h1>
      <h2 className="subtitle">Description</h2>
      <p className="description">{bookClub.description}</p>
      <h2 className="subtitle">Owner ID</h2>
      <p className="owner-id">{bookClub.owner_id}</p>
      <h2 className="subtitle">Books</h2>
      <ul className="book-list">
        {bookClub.books && bookClub.books.length > 0 ? (
          bookClub.books.map((book) => (
            <li key={book.id} className="book-item">
              <img
                src={book.book_image}
                alt={book.title}
                className="book-image"
              />
              <div>
                <strong className="book-title">{book.title}</strong> by{" "}
                <span className="book-author">{book.author}</span>
                <p className="book-description">{book.description}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No books available.</li>
        )}
      </ul>
    </div>
  );
};

export default BookClubDetail;
