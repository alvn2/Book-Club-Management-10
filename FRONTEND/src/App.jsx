import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBookClubForm from './components/CreateBookClubForm';
import JoinBookClub from './components/JoinBookClub';
import Discuss from './components/Discuss';
import BookClubList from './components/BookClubList';
import BookDetail from './components/BookDetail';
import AddBookForm from './components/AddBookForm';
import SubmitReviewForm from './components/SubmitReviewForm';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn/>} />
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
        </main>
      </div>
    </Router>
  );
};

export default App;
=======
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
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
