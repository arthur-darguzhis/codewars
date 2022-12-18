https://www.codewars.com/kata/58111f4ee10b5301a7000175/train/sql
-- Create your SELECT statement here
SELECT age, COUNT(age) as people_count FROM people GROUP BY age;
