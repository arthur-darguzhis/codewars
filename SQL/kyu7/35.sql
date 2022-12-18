-- https://www.codewars.com/kata/5a8ec692b17101bfc70001ba/train/sql
-- Replace with your SQL Query
SELECT COUNT(name) as count_products_types,
       producer
FROM products
GROUP BY producer
ORDER BY count_products_types DESC, producer ASC
