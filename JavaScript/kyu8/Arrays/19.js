function sumMix(x){
    return x.reduce((acc, num) => acc += Number(num), 0)
}

sumMix([9, 3, '7', '3'])
