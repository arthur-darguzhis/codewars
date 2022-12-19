// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length === 0){
        return 0;
    }
    return numbers.reduce((acc, el) => acc + el, 0);
};

sum([1, 5.2, 4, 0, -1])
