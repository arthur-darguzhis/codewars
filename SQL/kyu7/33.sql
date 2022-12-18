-- https://www.codewars.com/kata/5943b797d8c9432eb7000066/train/sql
SELECT md5 || Repeat('1', length(sha256) - length(md5))   as md5,
       Repeat('0', length(sha256) - length(sha1)) || sha1 as sha1,
       sha256
FROM encryption;
