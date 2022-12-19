function countBy(x, n) {
    return Array.from({length: n}, (v, k) => (k + 1) * x);
}


countBy(2, 5)
