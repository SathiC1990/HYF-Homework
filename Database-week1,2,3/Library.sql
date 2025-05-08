CREATE DATABASE LibraryDB;

USE LibraryDB;

-- Create the Publisher table
CREATE TABLE Publisher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
-- Create the Book table
CREATE TABLE Book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publish_date DATE NOT NULL,
    publisher_id INT,
    CONSTRAINT fk_publisher Foreign Key (Publisher_id) REFERENCES Publisher (id) ON DELETE SET NULL
);
-- Create the Author table
CREATE TABLE Author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
--Create the Genre table
CREATE TABLE Genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
-- Create the Member table
CREATE TABLE Member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    join_date DATE NOT NULL
);

-- Create the Borrowing_Log table
CREATE TABLE Borrowing_Log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    borrowed_date DATE NOT NULL,
    due_date DATE NOT NULL,
    CONSTRAINT fk_book Foreign Key (book_id) REFERENCES Book (id) ON DELETE CASCADE,
    CONSTRAINT fk_member Foreign Key (member_id) REFERENCES Member (id) ON DELETE Cascade
);
--- Create the Book_Author linking table for the many-to-many relationship between Book and Author
CREATE TABLE Book_Author (
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (book_id, author_id),
    CONSTRAINT fk_book_author_book Foreign Key (book_id) REFERENCES Book (id) ON DELETE CASCADE,
    CONSTRAINT fk_book_author_author Foreign Key (author_id) REFERENCES Author (id) ON DELETE CASCADE
);

-- Create the Book_Genre linking table for the many-to-many relationship between Book and Genre
CREATE TABLE Book_Genre (
    book_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (book_id, genre_id),
    CONSTRAINT fk_book_genre_book Foreign Key (book_id) REFERENCES Book (id) ON DELETE CASCADE,
    CONSTRAINT fk_book_genre_genre Foreign Key (genre_id) REFERENCES Genre (id) ON DELETE CASCADE
);