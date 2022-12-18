-- https://www.codewars.com/kata/5ab828bcedbcfc65ea000099/train/sql
-- i choose you! --
SELECT p.pokemon_name,
       (p.str * m.multiplier) as modifiedStrength,
       element
FROM pokemon as p
         LEFT JOIN multipliers as m ON p.element_id = m.id
WHERE (p.str * m.multiplier) >= 40
ORDER BY modifiedStrength DESC
