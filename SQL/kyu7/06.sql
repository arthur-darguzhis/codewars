-- https://www.codewars.com/kata/59440034e94fae05b2000073/train/sql
/*  SQL  */
SELECT CONCAT(n.prefix, ' ', n.first, ' ', n.last, ' ', n.suffix) as title
FROM names as n
