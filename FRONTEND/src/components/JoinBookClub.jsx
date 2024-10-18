import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JoinBookClub.css";

const JoinBookClub = () => {
  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    const fetchBookClubs = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/bookclubs`);
        setBookClubs(response.data);
      } catch (error) {
        console.error("Error fetching book clubs:", error);
      }
    };

    fetchBookClubs();
  }, []);

  const handleJoin = async (clubId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/bookclub/${clubId}/join`
      );
      alert(response.data.message); // Alert the success message
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="title">Join a Book Club</h2>
      {bookClubs.length > 0 ? (
        <ul className="club-list">
          {bookClubs.map((club) => (
            <li key={club.id} className="club-item">
              <h3>{club.name}</h3>
              <p>{club.description}</p>
              <button
                className="join-button"
                onClick={() => handleJoin(club.id)}
              >
                Join
              </button>
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
