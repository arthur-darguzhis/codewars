// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}
positiveSum([1, -4, 7, 12]);
