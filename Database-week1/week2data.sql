--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'Cooking',
        'Mexican Cuisine',
        NOW(),
        NOW(),
        '2025-06-30 16:00:00',
        1,
        1
    );
--Change the title of a task
UPDATE task
set
    title = 'Grocery Shopping'
WHERE
    title = 'Buy new phone';
--Change a task due date
UPDATE task
set
    due_date = '2025-09-30'
WHERE
    due_date = '2025-09-30';
--Change a task status
UPDATE task set status_id = 1 WHERE status_id = 3;
--Mark a task as complete
UPDATE task set status_id = 3 WHERE status_id = 1;
--Delete a task
delete from task
where
    title = 'New Task Title'
    --Delete database
DROP DATABASE school;
-- create database
create database School;
-- select database
use School;
-- Create the Class table
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);
-- Create the Student table
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    class_id INT,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Create an index on the name column of the Student table
CREATE INDEX idx_student_name ON Student (name);
--Add a new column to the class table named status
ALTER TABLE class
ADD COLUMN Status ENUM(
    'not-started',
    'ongoing',
    'finished'
) NOT NULL DEFAULT 'not-started';
--hyf_lesson2 database

USE HYFCW;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM task
    JOIN user on task.user_id = user.id
where
    user.email like '%@spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'
select task.*
from task
    join user on user.id = task.user_id
    join status on status.id = task.status_id
where
    user.name = 'Donald Duck'
    and status.name = 'Not started';
--Get all the tasks for 'Maryrose Meadows' that were created in september
select t.*
from task t
    join user u on t.user_id = u.id
    join status s on t.status_id = s.id
where
    u.name = 'Maryrose Meadows'
    and MONTH(t.created) = 9;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.
SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY
    MONTH(created);