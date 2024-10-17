<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
=======
import React, { useState, useEffect } from 'react';
import api from '../Services/Api';
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

const JoinBookClub = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookClubs = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://127.0.0.1:5000/bookclubs`);
        setBookClubs(response.data);
      } catch (error) {
        console.error("Error fetching book clubs:", error);
=======
        const response = await api.get('/book-clubs');
        setBookClubs(response.data);
      } catch (error) {
        console.error('Error fetching book clubs:', error);
      } finally {
        setLoading(false);
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      }
    };

    fetchBookClubs();
  }, []);

<<<<<<< HEAD
  const handleJoin = async (clubId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/bookclub/${clubId}/join`
      );
      alert(response.data.message); // Alert the success message
    } catch (error) {
      if (error.response) {
        // Handle specific errors from the server
        alert(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
=======
  if (loading) return <div>Loading...</div>;
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

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

<<<<<<< HEAD
export default JoinBookClub;
=======
export default JoinBookClub;
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
