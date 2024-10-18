# Book Club Management App

## Overview
The Book Club Management App is a React-based platform that allows users to create, join, and manage book clubs. Users can add books to reading lists, leave comments, rate books within their clubs, and engage in discussions about their favorite reads.

## Features
- User authentication (sign up and sign in)
- Create and join book clubs
- View a list of available book clubs
- Add books to a club's reading list
- Leave reviews and ratings for books
- Engage in discussions about books
- Responsive design for various devices

## Components
- `App.js`: Main component that sets up routing and overall structure
- `Home.js`: Landing page component with features overview
- `Navbar.js`: Navigation component
- `CreateBookClubForm.js`: Form for creating a new book club
- `JoinBookClub.js`: Component for joining existing book clubs
- `Discuss.js`: Discussion component for books
- `BookClubList.js`: Displays a list of available book clubs
- `BookDetail.js`: Shows details of a specific book club or book
- `AddBookForm.js`: Form for adding a new book to a club
- `ReviewForm.js`: Form for submitting book reviews
- `SubmitReviewForm.js`: Another form for submitting book reviews (consider consolidating with ReviewForm)
- `SignIn.js` and `SignUp.js`: User authentication components

## Technologies Used
- React for building the user interface
- React Router for navigation
- Formik and Yup for form handling and validation
- Axios for API requests
- Context API for state management (AuthContext)
- CSS for styling

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/book-club-management-app.git
   ```
2. Navigate to the project directory:
   ```
   cd book-club-management-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## Usage

### User Authentication
1. Click on "Sign Up" in the navbar to create a new account
2. Use the "Sign In" page to log into your account

### Creating a Book Club
1. Navigate to the "Create a Book Club" page
2. Fill in the required information (name and description)
3. Submit the form to create a new book club

### Joining a Book Club
1. Go to the "Join a Book Club" page
2. Browse the list of available book clubs
3. Click the "Join" button next to the club you want to join

### Adding Books to Reading List
1. Navigate to a specific book club page
2. Use the "Add Book" form to input book details (title, author, year published)
3. Submit the form to add the book to the club's reading list

### Reviewing Books
1. Go to a specific book's page within a book club
2. Use the review form to submit a rating (1-5) and comment

### Engaging in Discussions
1. Navigate to the "Discuss" page
2. Share your thoughts and respond to other users' comments

## API Endpoints
The app interacts with a backend API. Here are some of the endpoints used:
- `POST /signUp`: Register a new user
- `POST /login`: Authenticate a user
- `GET /user`: Fetch current user details
- `GET /bookclubs`: Fetch list of book clubs
- `POST /create-bookclub`: Create a new book club
- `POST /bookclub/:id/join`: Join a specific book club
- `POST /api/book-clubs/:clubId/books/:bookId/reviews`: Submit a book review

## State Management
The app uses React's Context API for managing authentication state. The `AuthContext` provides user authentication status and methods for login and logout across the application.

## Validation
Form validation is handled using Yup schemas. Separate validation schemas are defined for book forms and review forms in the `validationSchemas.js` file.


## License


## Contact
(Contact information for the project maintainer or team)