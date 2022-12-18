-- https://www.codewars.com/kata/580918e24a85b05ad000010c/train/sql
-- Create your SELECT statement here
SELECT p.id, p.name, COUNT(t.id) as toy_count
FROM people as p
         LEFT JOIN toys as t ON p.id = t.people_id
GROUP BY p.id;
