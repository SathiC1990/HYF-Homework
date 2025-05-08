---Data model:
create database Mealsharing;

use Mealsharing;

--Create Table for Meal
CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);
--Create Table for Reservation
CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

-- Create Table for Review
CREATE Table Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT Null,
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal (id)
);
--Insert value in Meal Table
INSERT INTO
    Meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Italian Dinner',
        'A classic Italian meal with pasta and wine',
        'Rome, Italy',
        '2024-09-20 18:30:00',
        50,
        29.99,
        '2024-09-10'
    ),
    (
        'Mexican Fiesta',
        'Authentic Mexican dishes with spicy options',
        'Mexico City, Mexico',
        '2024-09-21 19:00:00',
        60,
        24.99,
        '2024-09-10'
    ),
    (
        'Sushi Night',
        'Fresh sushi from Japan with sake',
        'Tokyo, Japan',
        '2024-09-22 20:00:00',
        40,
        34.99,
        '2024-09-10'
    );

--Insert Value in Reservation Table
INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        4,
        1,
        '2025-05-04',
        '123-456-7890',
        'John Doe',
        'john@example.com'
    ),
    (
        2,
        2,
        '2024-05-05',
        '987-654-3210',
        'Jane Smith',
        'jane@example.com'
    ),
    (
        3,
        3,
        '2024-09-17',
        '456-789-1234',
        'Carlos Lopez',
        'carlos@example.com'
    );

--Insert Value In Review Table
INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Amazing Dinner!',
        'The Italian Dinner was fantastic, great food and atmosphere.',
        1,
        5,
        '2024-09-21'
    ),
    (
        'Spicy and Delicious',
        'The Mexican Fiesta had the best tacos I have ever had!',
        2,
        4,
        '2024-09-22'
    ),
    (
        'Fresh Sushi!',
        'Loved the Sushi Night, everything was very fresh and tasty.',
        3,
        5,
        '2024-09-23'
    );

--Meal
--get all meal:
select * from Meal;
--add a meal:
INSERT INTO
    Meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'French Gourmet Night',
        'A luxurious French meal featuring fine wines and gourmet dishes',
        'Paris, France',
        '2024-09-25 19:00:00',
        30,
        49.99,
        '2024-09-10'
    );
--Get a meal by Id
SELECT * FROM Meal WHERE Id = 3;

--Update Meal

UPDATE Meal
SET
    title = 'Italian Gourmet Dinner',
    price = 39.99,
    location = 'Venice, Italy'
WHERE
    id = 1;

--Delete Meal with any id, fx 1
ALTER TABLE Reservation DROP FOREIGN KEY Reservation_ibfk_1;

ALTER TABLE Reservation
ADD CONSTRAINT Reservation_ibfk_1 FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE CASCADE;

--Get all reservations
SELECT * from Reservation;
--Add a new reservation
INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    ) value (
        3,
        2,
        '2024-09-11',
        '555-123-4567',
        'Alice Johnson',
        'alice@example.com'
    );
--Get a reservation with any id, fx 1
SELECT * FROM Reservation WHERE id = 3;

----update reservation
UPDATE Reservation
SET
    number_of_guests = 5,
    contact_phonenumber = '123-456-7890',
    contact_name = 'Bob Smith'
WHERE
    id = 1;

--delete a reservarion
delete from Reservation where id = 2;

--Get all reviews
SELECT * FROM Review;

--Add a new review
insert into
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    ) value (
        'Delicious Meal',
        'The meal was outstanding and the service was excellent!',
        2,
        5,
        '2024-09-11'
    );
--Get a review with any id, fx 1
select * from Review where id = 2;
--Update A review
UPDATE Review
SET
    title = 'Amazing Experience',
    description = 'The meal was beyond expectations! Would recommend to anyone.',
    stars = 5
WHERE
    id = 1;

--Delete A review
delete from Review where id = 2;