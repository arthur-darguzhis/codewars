function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b).filter((num, index, arr) => !arr.includes(num, index + 1))
}

mergeArrays([18, 1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
