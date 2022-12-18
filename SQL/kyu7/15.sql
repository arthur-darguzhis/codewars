-- https://www.codewars.com/kata/5ab7a736edbcfc8e62000007/train/sql
--your code here--
SELECT sailorsenshi.senshi_name as sailor_senshi,
       sailorsenshi.real_name_jpn as real_name,
       cats.name as cat,
       schools.school as school
FROM sailorsenshi
         LEFT JOIN cats ON sailorsenshi.cat_id = cats.id
         LEFT JOIN schools ON sailorsenshi.school_id = schools.id
