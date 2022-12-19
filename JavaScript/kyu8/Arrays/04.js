// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript
function digitize(n) {
    return [...String(n)].map(Number).reverse();
}

console.log(digitize(35231));
