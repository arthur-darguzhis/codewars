function divisibleBy(numbers, divisor){
    return numbers.filter((numbers) => numbers % divisor === 0)
}

divisibleBy([1,2,3,4,5,6], 2)
