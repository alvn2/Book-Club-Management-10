import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookClubList = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookClubs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/bookclubs");
        setBookClubs(response.data);
      } catch (error) {
        setError("Error fetching book clubs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookClubs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
<<<<<<< HEAD
=======
  if (bookClubs.length === 0) return <div>No book clubs available.</div>;
>>>>>>> f62d0766a5f65d724900a59a2eefd23bac75ab91

  return (
    <div className="container">
      <h2 className="title">Available Book Clubs</h2>
      <ul className="book-club-list">
        {bookClubs.map((club) => (
          <li key={club.id} className="book-club-item">
            <Link to={`/bookclubs/${club.id}`} className="book-club-link">
              {club.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookClubList;
