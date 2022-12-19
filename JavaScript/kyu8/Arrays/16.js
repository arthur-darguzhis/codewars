function getAverage(marks) {
    return Math.floor(marks.reduce((acc, el) => acc + el, 0) / marks.length)
}

getAverage([1, 1, 1, 4, 5,])
