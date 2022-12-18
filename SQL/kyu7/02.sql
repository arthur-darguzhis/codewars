https://www.codewars.com/kata/5802e32dd8c944e562000020/train/sql
-- Create your SELECT statement here
SELECT p.id,
       p.name,
       p.isbn,
       p.company_id,
       p.price,
       c.name as company_name
FROM products as p
         LEFT JOIN companies as c ON p.company_id = c.id
