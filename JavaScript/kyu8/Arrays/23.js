function removeEveryOther(arr) {
    return arr.filter((num, index) => index % 2 === 0)
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
