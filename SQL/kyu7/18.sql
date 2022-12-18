-- https://www.codewars.com/kata/594900e16fd782a607000059/train/sql
/*  SQL  */
SELECT id,
       BIT_LENGTH(name) as name,
       birthday,
       BIT_LENGTH(race) as race
FROM demographics
