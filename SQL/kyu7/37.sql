-- https://www.codewars.com/kata/59491429952ac97ad9000106/train/sql
/*  SQl  */
SELECT
    octet_length(number1||'') as octnum1,
    octet_length(number2||'') as octnum2,
    octet_length(number3||'') as octnum3,
    octet_length(number4||'') as octnum4,
    octet_length(number5||'') as octnum5
FROM numbers
