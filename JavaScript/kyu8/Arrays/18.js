function monkeyCount(n) {
    return Array.from({length: n}, (v,k) => k+1)
}

monkeyCount(5)
