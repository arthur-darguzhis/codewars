-- https://www.codewars.com/kata/59413d53f5c3947364000016/train/sql
/*  SQL  */
SELECT regexp_split_to_table(text,'[aeiou]') as results FROM random_string
