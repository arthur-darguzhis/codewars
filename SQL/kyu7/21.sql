-- https://www.codewars.com/kata/5943a58f95d5f72cb900006a/train/sql
/*  SQL  */
SELECT LEFT(project, commits) as project,
       RIGHT(address, contributors) as address
FROM repositories
