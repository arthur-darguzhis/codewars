-- https://www.codewars.com/kata/594804a218e96caa8d00051b/train/sql
/*  SQL  */
SELECT id,
       ASCII(LEFT(name, 1)) as name,
       birthday,
       ASCII(LEFT(race, 1)) as race
FROM demographics;
