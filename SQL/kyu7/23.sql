-- https://www.codewars.com/kata/59401c25c15cbeb58d000028/train/sql
/*  SQL  */
SELECT id,
       name,
       split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id
