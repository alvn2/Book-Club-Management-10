import React, { useState, useEffect } from 'react';
import api from '../Services/Api';

const JoinBookClub = () => {
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
      <h2>Join a Book Club</h2>
      {bookClubs.length > 0 ? (
        <ul>
          {bookClubs.map((club) => (
            <li key={club.id}>
              <h3>{club.name}</h3>
              <p>{club.description}</p>
              <button onClick={() => alert(`Joined ${club.name}`)}>Join</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No book clubs available to join.</p>
      )}
    </div>
  );
};

export default JoinBookClub;