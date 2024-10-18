import React from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Use navigate to handle routing

  const handleStartClub = () => {
    navigate('/create-bookclub'); // Navigate to the create book club page
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Building Community Through Books</h1>
        <p>Organize your club, start a new one, or find your book people.</p>
        <button className="cta-button" onClick={handleStartClub}>
          Start a Club
        </button>
      </div>
      
      {/* Featured Book Clubs Section */}
      <div className="featured-section">
        <h2>Featured Book Clubs</h2>
        <div className="featured-clubs">
          <div className="club-card">
            <h3>Historical Fiction Lovers</h3>
            <p>Explore the world through past events and compelling narratives.</p>
            <button className="club-button">Join Club</button>
          </div>
          <div className="club-card">
            <h3>Fantasy Readers</h3>
            <p>Dive into epic adventures with like-minded fantasy fans.</p>
            <button className="club-button">Join Club</button>
          </div>
          <div className="club-card">
            <h3>Science Fiction Society</h3>
            <p>Journey to the future and beyond with cutting-edge sci-fi novels.</p>
            <button className="club-button">Join Club</button>
          </div>
        </div>
      </div>

      {/* Recent Book Additions Section */}
      <div className="recent-books-section">
        <h2>Recent Book Additions</h2>
        <div className="recent-books">
          <div className="book-card">
            <h4>Dune</h4>
            <p>By Frank Herbert - A classic sci-fi novel set in a distant future.</p>
          </div>
          <div className="book-card">
            <h4>The Night Circus</h4>
            <p>By Erin Morgenstern - A magical realism novel with enchanting worlds.</p>
          </div>
          <div className="book-card">
            <h4>The Song of Achilles</h4>
            <p>By Madeline Miller - A retelling of the Iliad, centered on the hero Achilles.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Members Are Saying</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"Joining this book club has been a game-changer for my reading habits!"</p>
            <span>- Sarah M.</span>
          </div>
          <div className="testimonial-card">
            <p>"I love the diversity of clubs. I found a community that matches my love for fantasy novels."</p>
            <span>- John D.</span>
          </div>
          <div className="testimonial-card">
            <p>"It's not just about the books, it's about the friendships I’ve made!"</p>
            <span>- Emily W.</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bottom-cta-section">
        <h2>Ready to Join the Fun?</h2>
        <p>Find the right book club for you, or start your own today!</p>
        <button className="cta-button" onClick={() => navigate('/join-bookclub')}>
          Join a Book Club
        </button>
      </div>
    </div>
  );
};

export default Home;
