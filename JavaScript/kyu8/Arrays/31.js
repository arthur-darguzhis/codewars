function index(array, n) {
    if(array.at(n) === undefined){
        return -1;
    }
    return Math.pow(array[n],n)
}

index([5,2,8,2,1], 1)
