// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript
const array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((sum, el) =>
    el == true
        ? sum += 1
        : sum,
        0)
}

countSheeps(array1)
