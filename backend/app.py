from server import app, db

from server.models import Book, Users, Bookclub, Comments, Membership
import random

with app.app_context():
    # Deleting existing data
    print("Deleting data...")
    Comments.query.delete()
    Membership.query.delete()
    Book.query.delete()
    Bookclub.query.delete()
    Users.query.delete()

    # Creating Users
    print("Creating user list...")
    users = []
    for i in range(1, 11):  # Creating 10 users
        user = Users(username=f"user{i}", email=f"user{i}@example.com", password="password")
        users.append(user)

    print("Creating users...")
    db.session.add_all(users)
    db.session.commit()

    # Updated Bookclub names
    bookclub_names = [
        "The Enchanted Library",
        "Epic Reads Society",
        "Whimsical Wordsmiths",
        "Fiction Fanatics",
        "The Book Nook",
        "Readers' Retreat",
        "Novel Notions",
        "Page Turners",
        "Bookworms United",
        "The Literary Voyage"
    ]

    # Creating Bookclubs
    print("Creating bookclubs...")
    bookclubs = []
    for i in range(len(bookclub_names)):  # Loop through the list of names
        bookclub = Bookclub(
            name=bookclub_names[i],
            description=f"A cozy haven for lovers of literature.",
            owner_id=random.choice([user.id for user in users])  # Random owner from the created users
        )
        bookclubs.append(bookclub)

    db.session.add_all(bookclubs)
    db.session.commit()

    # Creating Books
    print("Creating book list...")
    book_titles_authors_images = [
        ("The Midnight Library", "Matt Haig", "https://m.media-amazon.com/images/I/71lLxCyq4EL._UF894,1000_QL80_.jpg"),
        ("Circe", "Madeline Miller", "https://m.media-amazon.com/images/I/81GiM5OhweL._AC_UF894,1000_QL80_.jpg"),
        ("The Silent Patient", "Alex Michaelides", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CgUpPheEFJonz2Nc3feDrtSqxevTU5SdtA&s"),
        ("The Vanishing Half", "Brit Bennett", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5PGD5nl7I3ZZsC1xvyldt15xN9N6vkKPLg&s"),
        ("Daisy Jones & The Six", "Taylor Jenkins Reid", "https://m.media-amazon.com/images/I/811mH+xbvwL._AC_UF894,1000_QL80_.jpg"),
        ("Where the Crawdads Sing", "Delia Owens", "https://i1.sndcdn.com/artworks-000369828696-6hx9pu-t500x500.jpg"),
        ("Educated", "Tara Westover", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuTk3BuRN6REPtN4LJ0OKh1UiyFv8PlRKNQ&s"),
        ("The Night Circus", "Erin Morgenstern", "https://m.media-amazon.com/images/I/710TOUsAW1L._UF1000,1000_QL80_.jpg"),
        ("The Invisible Life of Addie LaRue", "V.E. Schwab", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQNwfVOqoCcd6uyq8JJ2ONZhSZuGEy_3fMQ&s"),
        ("Anxious People", "Fredrik Backman", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LDutKa_LI8laJAGsdk4eO-t0qju7ht2tbg&s"),
    ]

    # Distributing books among book clubs
    print("Assigning books to bookclubs...")
    books_per_club = 3  # Number of books per bookclub
    books = []
    for i in range(len(book_titles_authors_images)):
        title, author, image = book_titles_authors_images[i]
        book = Book(
            book_title=title,
            book_author=author,
            description=f"A captivating tale of {title}.",
            book_club_id=(i // books_per_club) % len(bookclubs),  # Distribute books evenly across clubs
            book_image=image
        )
        books.append(book)

    print("Creating books...")
    db.session.add_all(books)
    db.session.commit()

    # Creating Comments
    print("Creating comments...")
    comments = []
    for book in books:
        for user in random.sample(users, 3):  # Each book gets 3 comments from random users
            comment = Comments(
                user_id=user.id,
                book_id=book.id,
                content=f"Comment by {user.username} on {book.book_title}."
            )
            comments.append(comment)

    db.session.add_all(comments)
    db.session.commit()

    # Creating Memberships
    print("Creating memberships...")
    memberships = []
    for bookclub in bookclubs:
        for user in random.sample(users, 5):  # Each book club gets 5 members
            membership = Membership(
                user_id=user.id,
                bookclub_id=bookclub.id
            )
            memberships.append(membership)

    db.session.add_all(memberships)
    db.session.commit()

    print("Seeding done!")


    if __name__ == '__main__':
        app.run(debug=True)