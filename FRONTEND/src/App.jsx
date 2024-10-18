<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBookClubForm from "./components/CreateBookClubForm";
import JoinBookClub from "./components/JoinBookClub";
import Discuss from "./components/Discuss";
import BookClubList from "./components/BookClubList";
import BookDetail from "./components/BookDetail";
import AddBookForm from "./components/AddBookForm";
import SubmitReviewForm from "./components/SubmitReviewForm";
import BookClubDetail from "./components/BookClubDetail";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
>>>>>>> f62d0766a5f65d724900a59a2eefd23bac75ab91

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
<<<<<<< HEAD
          <AuthProvider>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/create-bookclub" element={<CreateBookClubForm />} />
              <Route path="/join-bookclub" element={<JoinBookClub />} />
              <Route path="/discuss" element={<Discuss />} />
              <Route path="/bookclubs" element={<BookClubList />} />
              <Route path="/bookclubs/:id" element={<BookClubDetail />} />
              <Route
                path="/bookclubs/:clubId/add-book"
                element={<AddBookForm />}
              />
              <Route
                path="/bookclubs/:clubId/books/:bookId/review"
                element={<SubmitReviewForm />}
              />
            </Routes>
          </AuthProvider>
=======
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-bookclub" element={<CreateBookClubForm />} />
            <Route path="/join-bookclub" element={<JoinBookClub />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/bookclubs" element={<BookClubList />} />
            <Route path="/bookclubs/:clubId" element={<BookDetail />} />
            <Route path="/bookclubs/:clubId/add-book" element={<AddBookForm />} />
            <Route path="/bookclubs/:clubId/books/:bookId/review" element={<SubmitReviewForm />} />
          </Routes>
>>>>>>> f62d0766a5f65d724900a59a2eefd23bac75ab91
        </main>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;
