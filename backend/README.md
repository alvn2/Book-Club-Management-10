# Book Club App Backend

## Overview
This is the backend server for the Book Club App, a platform for creating and managing book clubs, discussing books, and connecting with other readers.

## Features
- User authentication (sign up, sign in, sign out)
- Book club management (create, join, list)
- Book management (add, list, delete)
- Comment system for books
- User membership management for book clubs

## Technologies Used
- Python
- Flask
- SQLAlchemy
- Flask-Bcrypt for password hashing
- Flask-Login for user session management

## Setup and Installation

### Prerequisites
- Python 3.x
- pip (Python package manager)

### Steps
1. Clone the repository:
   ```
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. (Optional) Seed the database with sample data:
   ```
   python seed_database.py
   ```

6. Start the server:
   ```
   python run.py
   ```

## API Endpoints

### Authentication
- POST /signUp - Register a new user
- POST /signIn - User login
- GET /logout - User logout

### Book Clubs
- POST /create-bookclub - Create a new book club
- GET /bookclubs - List all book clubs
- GET /bookclubs/<int:id> - Get details of a specific book club
- POST /bookclub/<int:id>/join - Join a book club

### Books
- POST /addbook/ - Add a new book
- GET /booklist - List all books
- GET /book/<int:id> - Get details of a specific book
- DELETE /delete-book/<int:id> - Delete a book

### Comments
- POST /add-comment/ - Add a comment to a book
- GET /comments - List all comments
- DELETE /comment/<int:id>/delete - Delete a comment

## Models
- Users
- Bookclub
- Book
- Comments
- Membership

