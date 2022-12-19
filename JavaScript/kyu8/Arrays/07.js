function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0){
        return [];
    }

    let countOfPositivesNumbers = 0;
    let negativeSum = 0;
    input.forEach((num) => {
        if(num > 0){
            countOfPositivesNumbers += 1;
        } else {
            negativeSum += num;
        }
    })
    return [countOfPositivesNumbers, negativeSum];
}


let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
