import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BookClubList from './components/BookClubList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import CreateBookClubForm from './components/CreateBookClubForm';
import JoinBookClub from './components/JoinBookClub';
import Discuss from './components/Discuss';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book-clubs" element={<BookClubList />} />
              <Route path="/book-clubs/:id" element={<BookDetail />} />
              <Route path="/book-clubs/:id/add-book" element={<AddBook />} />
              <Route path="/create-club" element={<CreateBookClubForm />} />
              <Route path="/join-club" element={<JoinBookClub />} />
              <Route path="/book-clubs/:id/discuss" element={<Discuss />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;