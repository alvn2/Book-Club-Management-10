import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookList.css";

const BookList = () => {
  const { clubId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/booklist`);
        setBooks(response.data);
      } catch (err) {
        setError("Error fetching books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [clubId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="book-list">
      <h2>Books</h2>
      <ul className="book-items">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div className="book-info">
              <strong className="book-title">{book.book_title}</strong>
              <p className="book-author">by {book.book_author}</p>
              <p className="book-description">{book.description}</p>
            </div>
            {book.book_image && (
              <img
                className="book-image"
                src={book.book_image}
                alt={book.book_title}
              />
            )}
            <h4>Comments:</h4>
            <ul className="comments">
              {book.comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  <strong>{comment.user}</strong>: {comment.content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
