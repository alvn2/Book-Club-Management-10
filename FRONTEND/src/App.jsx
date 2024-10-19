import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBookClubForm from './components/CreateBookClubForm';
import JoinBookClub from './components/JoinBookClub';
import Discuss from './components/Discuss';
import BookClubList from './components/BookClubList';
import BookDetail from './components/BookDetail';
import AddBookForm from './components/AddBookForm';
import SubmitReviewForm from './components/SubmitReviewForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BookList from './components/BookList';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signin" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} />
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/create-bookclub" element={
              <ProtectedRoute>
                <CreateBookClubForm />
              </ProtectedRoute>
            } />
            {/* Add ProtectedRoute wrapper to other routes that require authentication */}
            {/* ... */}
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;