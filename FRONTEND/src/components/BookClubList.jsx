import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/Api';

const BookClubList = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookClubs = async () => {
      try {
        const response = await api.get('/book-clubs');
        setBookClubs(response.data);
      } catch (error) {
        console.error('Error fetching book clubs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookClubs();
  }, []);

  if (loading) return <div>Loading...</div>;

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