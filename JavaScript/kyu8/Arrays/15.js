function arrayPlusArray(arr1, arr2) {
    const arraySum = (arr) => {
        return arr.reduce((acc, el) => acc + el, 0);
    }
    return arraySum(arr1) + arraySum(arr2); //something went wrong
}

arrayPlusArray([1, 2, 3], [4, 5, 6])
