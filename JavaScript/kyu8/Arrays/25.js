function squareOrSquareRoot(array) {
    return array.map((number) => {
        const sqrt = Math.sqrt(number);
        return Number.isInteger(sqrt) ? sqrt : number ** 2;
    })
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]);
//[ 2, 9, 3, 49, 4, 1 ]
