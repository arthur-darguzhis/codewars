-- https://www.codewars.com/kata/594a389387a7c6a77a000005/train/sql
/*  SQL  */
SELECT
    char_length(''||name) as id,
    char_length(''||legs) as name,
    char_length(''||arms) as legs,
    char_length(''||characteristics) as arms,
    char_length(''||id) as characteristics
FROM monsters;
