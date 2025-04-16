--Find out how many tasks are in the task table
SELECT COUNT(*)from task;
--Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) from task where due_date is null;
--Find all the tasks that are marked as done
SELECT t.* 
FROM task t    
LEFT JOIN status s ON s.id = t.status_id
WHERE s.name = 'Done';

--Find all the tasks that are not marked as done
SELECT t.* 
FROM task t    
LEFT JOIN status s ON s.id = t.status_id
WHERE s.name != 'Done';
--Get all the tasks, sorted with the most recently created first
SELECT* from task ORDER BY created DESC;
--Get the single most recently created task
SELECT * from task ORDER BY created DESC LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database
select title, due_date from task where title LIKE  '%database%' OR description LIKE '%database%'; 
 
--Get the title and status (as text) of all tasks
select t.title, s.name from task t                                     
   left join status s on s.id=t.status_id;
--Get the name of each status, along with a count of how many tasks have that status
select s.name, count(t.id) as task_count from status s
   left join task t on s.id=t.status_id
   group by s.name;
--Get the names of all statuses, sorted by the status with most tasks first
select s.name, count(t.id) as task_count from status s
   left join task t on s.id=t.status_id
   group by s.name order by task_count desc;
