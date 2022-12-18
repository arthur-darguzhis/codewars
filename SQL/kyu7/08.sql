-- https://www.codewars.com/kata/59401e0e54a655a298000040/train/sql
/*  SQL  */
SELECT m.id, m.name, position(',' IN m.characteristics) as comma
FROM monsters as m
ORDER BY comma
