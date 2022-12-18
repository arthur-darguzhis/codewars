function squareSum(numbers) {
    return numbers.reduce((acc, number) => acc += number ** 2, 0)
}
