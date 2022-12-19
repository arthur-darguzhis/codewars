function findAverage(array) {
    return array.length !== 0
        ? array.reduce((acc, num) => acc += num, 0) / array.length
        : 0;
}

findAverage([1,2,3]);
