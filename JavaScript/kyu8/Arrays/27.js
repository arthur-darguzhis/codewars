function twoSort(s) {
    return s.sort().at(0).split('').join('***');
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// 'b***i***t***c***o***i***n'
