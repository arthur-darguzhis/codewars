-- https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f/train/sql
-- Your solution here
SELECT capital
FROM countries
WHERE continent LIKE 'Afri%'
  AND country LIKE 'E%'
ORDER BY capital ASC
LIMIT 3
