import React, { useEffect, useState } from "react";
import axios from "axios";

const JoinBookClub = () => {
  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    const fetchBookClubs = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/bookclub/${clubId}/join`
        );
        setBookClubs(response.data);
      } catch (error) {
        console.error("Error fetching book clubs:", error);
      }
    };

    fetchBookClubs();
  }, []);

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
